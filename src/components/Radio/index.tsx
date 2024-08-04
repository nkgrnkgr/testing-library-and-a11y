import { Center, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { Title } from "../Title";

function Component() {
  const [value, setValue] = useState("1");
  return (
    <RadioGroup onChange={setValue} value={value} aria-label="ユーザー区分">
      <Stack direction="row">
        <Radio value="1">個人</Radio>
        <Radio value="2">法人</Radio>
        <Radio value="3">その他</Radio>
      </Stack>
    </RadioGroup>
  );
}

export function RadioDisplay() {
  return (
    <>
      <Title>RadioGroup</Title>
      <Center p={4} w="500px">
        <Component />
      </Center>
    </>
  );
}
