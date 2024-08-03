import {
  Button,
  Center,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Title } from "../Title";

function Component() {
  return (
    <Menu>
      <MenuButton as={Button}>メニューを開く</MenuButton>
      <MenuList>
        <MenuItem>個人設定</MenuItem>
        <MenuItem>購入履歴</MenuItem>
        <MenuItem>アカウントの切り替え</MenuItem>
        <MenuItem>ログアウト</MenuItem>
      </MenuList>
    </Menu>
  );
}

export function MenuDisplay() {
  return (
    <>
      <Title>Menu</Title>
      <Center p={4} w="500px">
        <Component />
      </Center>
    </>
  );
}
