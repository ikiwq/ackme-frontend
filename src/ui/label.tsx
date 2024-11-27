import {Flex, FlexProps, Text} from "@radix-ui/themes";
import {concatClassNames} from "../lib/css";

interface LabelProps {
  label: string;
  description?: string;
  labelTextClassName?: string
}

export default function Label({label, description, children, labelTextClassName, ...props}: LabelProps & FlexProps) {
  return (
    <Flex direction={"column"} gap={"1"} {...props}>
      <Flex direction={"column"}>
        <Text 
        className={concatClassNames("text-neutral-600 dark:text-neutral-300", labelTextClassName)}>
          {label}
          </Text>
        {description && <Text>{description}</Text>}
      </Flex>
      {children}
    </Flex>
  );
}