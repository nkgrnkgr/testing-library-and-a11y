import { Text, VStack } from "@chakra-ui/react";
import { useId } from "react";

export function DisplayedValue() {
  const id = useId();

  return (
    <VStack>
      <Text id={id}>手数料</Text>
      <Text aria-labelledby={id}>250円</Text>
    </VStack>
  );
}
