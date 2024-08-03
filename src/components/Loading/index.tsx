import { Center, HStack, Spinner, Text } from "@chakra-ui/react";
import { Title } from "../Title";

function Component() {
  return (
    <HStack role="alert" aria-live="assertive">
      <Spinner />
      <Text m={2}>読み込み中です...</Text>
    </HStack>
  );
}

export function Loading() {
  return (
    <>
      <Title>Loading</Title>
      <Center p={4} w="500px">
        <Component />
      </Center>
    </>
  );
}
