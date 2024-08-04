import { Center, FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { Title } from "../Title";

function Component() {
  const [value, setValue] = useState("");
  return (
    <FormControl>
      <FormLabel>コメント</FormLabel>
      <Textarea value={value} onChange={(e) => setValue(e.target.value)} />
    </FormControl>
  );
}

export function TextareaDisplay() {
  return (
    <>
      <Title>Textarea</Title>
      <Center p={4} w="500px">
        <Component />
      </Center>
    </>
  );
}
