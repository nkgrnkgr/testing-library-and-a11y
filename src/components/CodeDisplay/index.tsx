import { Center, Code } from "@chakra-ui/react";
import { Title } from "../Title";

function Component() {
  return (
    <Code p={1} aria-label="JavaScript Code!">
      const message = 'Hello World!'
    </Code>
  );
}

export function CodeDisplay() {
  return (
    <>
      <Title>Code</Title>
      <Center p={4} w="500px">
        <Component />
      </Center>
    </>
  );
}
