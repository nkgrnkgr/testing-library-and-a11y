import { Center, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useState } from "react";
import { Title } from "../Title";

function Component() {
  const [value, setValue] = useState("individual");
  return (
    <FormControl>
      <FormLabel>ユーザー区分</FormLabel>
      <Select
        placeholder="Select option"
        defaultValue={value}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="individual">個人</option>
        <option value="corporation">法人</option>
        <option value="etc">その他</option>
      </Select>
    </FormControl>
  );
}

export function SelectDisplay() {
  return (
    <>
      <Title>Select</Title>
      <Center p={4} w="500px">
        <Component />
      </Center>
    </>
  );
}
