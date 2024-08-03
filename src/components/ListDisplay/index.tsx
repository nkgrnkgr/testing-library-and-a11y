import { Box, Center, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { useId } from "react";
import { Title } from "../Title";

function Component() {
  const id = useId();
  return (
    <Box p={8} bgColor="gray.100">
      <Text id={id}>リスト</Text>
      <UnorderedList aria-labelledby={id} spacing={1}>
        <ListItem>アイテム 1</ListItem>
        <ListItem>アイテム 2</ListItem>
        <ListItem>アイテム 3</ListItem>
      </UnorderedList>
    </Box>
  );
}

export function ListDisplay() {
  return (
    <>
      <Title>List</Title>
      <Center p={4} w="500px">
        <Component />
      </Center>
    </>
  );
}
