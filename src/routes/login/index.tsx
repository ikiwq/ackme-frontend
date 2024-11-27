import { Button, Callout, Flex, Text, TextField } from "@radix-ui/themes";
import { createFileRoute } from "@tanstack/react-router";
import Label from "../../ui/label";
import { useState } from "react";
import { User } from "../../types/auth";
import {IoCheckmark, IoWarning} from "react-icons/io5";
import {ApiError} from "../../types/error";

export const Route = createFileRoute("/login/")({
  component: RouteComponent,
});

function RouteComponent() {
  // Loadings
  const [loadingLogin, setLoadingLogin] = useState(false);

  // Inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Errors and success
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onLogin = async () => {
    setError("");
    setSuccess("");
    setLoadingLogin(true);

    try {
      // TODO: Put this into a .env file
      const res = await fetch("http://localhost:7878/api/v1/auth/login", {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),
      });
     
      if (res.status === 401 || res.status === 500) {
        const errorBody : ApiError = await res.json();
        setError(errorBody.message);
        return;
      }

      const body: User = await res.json();
      setSuccess(`Welcome back, ${body.username}!`)

    } finally {
      setLoadingLogin(false);
    }
  };

  return (
    <Flex className="w-full h-full" justify={"center"} align={"center"}>
      <Flex gap={"4"} direction={"column"} className="w-64">
        <Text className="text-5xl font-medium">Login</Text>
        <Flex direction={"column"} gap={"3"}>
          <Label label="Username">
            <TextField.Root
              placeholder="Enter your username here"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></TextField.Root>
          </Label>
          <Label label="Password">
            <TextField.Root
              placeholder="Enter your password here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></TextField.Root>
          </Label>
          <Button
            size={"3"}
            className={`${!loadingLogin && "cursor-pointer"}`}
            loading={loadingLogin}
            onClick={onLogin}
          >
            <Text>Launch!</Text>
          </Button>
          {error.length > 0 && (
            <Callout.Root color="red">
              <Callout.Icon><IoWarning/></Callout.Icon>
              <Callout.Text>{error}</Callout.Text>
            </Callout.Root>
          )}
          {success.length > 0 && (
            <Callout.Root color="green">
              <Callout.Icon><IoCheckmark/></Callout.Icon>
              <Callout.Text>{success}</Callout.Text>
            </Callout.Root>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
