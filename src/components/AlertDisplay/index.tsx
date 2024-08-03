import { Alert, AlertIcon, Center } from "@chakra-ui/react";
import { Title } from "../Title";

export function AlertDisplay() {
  return (
    <>
      <Title>Alert Display</Title>
      <Center p={4} w="500px">
        <Alert status="error">
          <AlertIcon />
          アラート
        </Alert>
      </Center>
    </>
  );
}
