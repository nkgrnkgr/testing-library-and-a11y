import {
  Button,
  Center,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { Title } from "../Title";

function Component() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>ポップオーバーを開く</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>ポップオーバー</PopoverHeader>
        <PopoverBody>詳細な説明</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export function PopoverDisplay() {
  return (
    <>
      <Title>Popover</Title>
      <Center p={4} w="500px">
        <Component />
      </Center>
    </>
  );
}
