import { Flex, Select, Text } from "@radix-ui/themes";
import { createFileRoute } from "@tanstack/react-router";
import Label from "../ui/label";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { IconType } from "react-icons";
import { PiMonitor } from "react-icons/pi";
import { ColorScheme, Theme } from "../contexts/theme/types";
import { useThemeContext } from "../contexts/theme/theme";

export const Route = createFileRoute("/settings")({
  component: RouteComponent,
});

interface BrightnessSchemeEntry {
  label: string;
  value: string;
  Icon: IconType;
}

const brightnessSchemeEntries: BrightnessSchemeEntry[] = [
  {
    label: "Light",
    value: "light",
    Icon: BsSun,
  },
  {
    label: "Dark",
    value: "dark",
    Icon: BsMoonStars,
  },
  {
    label: "System",
    value: "system",
    Icon: PiMonitor,
  },
];

interface ColorSchemeEntry {
  label: string;
  value: string;
}

const colorSchemeEntries: ColorSchemeEntry[] = [
  {
    label: "Amber",
    value: "amber",
  },
  {
    label: "Blue",
    value: "blue",
  },
  {
    label: "Gray",
    value: "gray",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Iris",
    value: "iris",
  },
  {
    label: "Jade",
    value: "jade",
  },
  {
    label: "Pink",
    value: "pink",
  },
  {
    label: "Ruby",
    value: "ruby",
  },
  {
    label: "Violet",
    value: "violet",
  },
  {
    label: "Yellow",
    value: "yellow",
  },
];

function RouteComponent() {
  const { colorScheme, setColorScheme } = useThemeContext();
  const { theme, setTheme } = useThemeContext();

  return (
    <Flex className="w-full h-full" justify={"center"} align={"center"}>
      <Flex direction={"column"} gap={"5"} className="w-64">
        <Text className="text-5xl font-medium">Settings</Text>
        <Flex direction={"column"} gap={"4"}>
          <Label label="Theme" labelTextClassName="text-xl">
            <Select.Root
              defaultValue={colorScheme}
              onValueChange={(val) => setColorScheme(val as ColorScheme)}
            >
              <Select.Trigger />
              <Select.Content>
                {colorSchemeEntries.map((entry, index) => (
                  <Select.Item
                    key={`color-scheme-entry-${index}`}
                    value={entry.value}
                  >
                    <Text>{entry.label}</Text>
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </Label>
          <Label label="Brightness" labelTextClassName="text-xl">
            <Select.Root
              defaultValue={theme}
              onValueChange={(val) => setTheme(val as Theme)}
            >
              <Select.Trigger />
              <Select.Content>
                {brightnessSchemeEntries.map((entry, index) => (
                  <Select.Item
                    key={`color-scheme-entry-${index}`}
                    value={entry.value}
                  >
                    <Flex
                      gap={"2"}
                      direction={"row"}
                      justify={"center"}
                      align={"center"}
                    >
                      <entry.Icon /> {entry.label}
                    </Flex>
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </Label>
        </Flex>
      </Flex>
    </Flex>
  );
}
