import { Center, Checkbox } from "@chakra-ui/react";
import { useState } from "react";
import { Title } from "../Title";

function Component() {
  const [checked, setChecked] = useState(true);
  return (
    <Checkbox defaultChecked={checked} onChange={() => setChecked(!checked)}>
      Checkbox
    </Checkbox>
  );
}

export function CheckboxDisplay() {
  return (
    <>
      <Title>Checkbox</Title>
      <Center p={4} w="500px">
        <Component />
      </Center>
    </>
  );
}
