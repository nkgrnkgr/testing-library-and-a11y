import { Center, Heading } from "@chakra-ui/react";
import { Title } from "../Title";

function Component() {
  return <Heading>見出し</Heading>;
}

export function HeadingDisplay() {
  return (
    <>
      <Title>Heading</Title>
      <Center p={4} w="500px">
        <Component />
      </Center>
    </>
  );
}
