import {
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { type ChangeEvent, useId, useState } from "react";
import { Title } from "../Title";

function Component() {
  const [input, setInput] = useState("xxx@gmail.com");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const isError = !input.includes("@");
  const emailErrorId = useId();

  return (
    <FormControl isInvalid={isError}>
      <FormLabel>Email</FormLabel>
      <Input
        type="email"
        value={input}
        onChange={handleInputChange}
        aria-describedby={emailErrorId}
      />
      {isError && (
        <FormErrorMessage id={emailErrorId}>
          Emailのフォーマットが正しくありません
        </FormErrorMessage>
      )}
    </FormControl>
  );
}

export function FormControlDisplay() {
  return (
    <>
      <Title>Drawer</Title>
      <Center p={4} w="500px">
        <Component />
      </Center>
    </>
  );
}
