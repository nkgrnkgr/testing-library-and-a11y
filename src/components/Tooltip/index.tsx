import { Center, Text, Tooltip } from "@chakra-ui/react";
import { Title } from "../Title";

// https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/Roles/region_role
function Component() {
  return (
    <Tooltip label="Tooltip..." fontSize="md">
      <Text>ツールチップを表示</Text>
    </Tooltip>
  );
}

export function TooltipDisplay() {
  return (
    <>
      <Title>Tooltip</Title>
      <Center p={4} w="500px">
        <Component />
      </Center>
    </>
  );
}
