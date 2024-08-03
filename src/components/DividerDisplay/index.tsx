import { Center, Divider, VStack } from "@chakra-ui/react";
import { Title } from "../Title";

function Component() {
  return (
    <VStack spacing={4} align="stretch" w="100%">
      <Divider aria-label="区切り" borderWidth={2} borderColor="red" />
    </VStack>
  );
}

export function DividerDisplay() {
  return (
    <>
      <Title>Divider</Title>
      <Center p={4} w="500px">
        <Component />
      </Center>
    </>
  );
}
