import {
  Center,
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { useState } from "react";
import { Title } from "../Title";

function Component() {
  const [num, setNum] = useState(10);

  return (
    <FormControl>
      <FormLabel>数値入力</FormLabel>
      <NumberInput
        defaultValue={num}
        onChange={(_, valueNumber) => setNum(valueNumber)}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
}

export function NumberInputDisplay() {
  return (
    <>
      <Title>NumberInput</Title>
      <Center p={4} w="500px">
        <Component />
      </Center>
    </>
  );
}
