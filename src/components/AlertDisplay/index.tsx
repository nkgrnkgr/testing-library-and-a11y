import { Alert, AlertIcon, Center } from "@chakra-ui/react";
import { Title } from "../Title";

function Component() {
  return (
    <Alert status="error">
      <AlertIcon />
      アラート
    </Alert>
  );
}

export function AlertDisplay() {
  return (
    <>
      <Title>Alert</Title>
      <Center p={4} w="500px">
        <Component />
      </Center>
    </>
  );
}
