import { Button, Center, useToast } from "@chakra-ui/react";
import { Title } from "../Title";

// https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/Roles/region_role
function Component() {
  const toast = useToast();
  return (
    <Button
      type="button"
      onClick={() =>
        toast({
          title: "入力に誤りがあります。",
          description: "このメールアドレスはすでに登録されています。",
          status: "error",
          duration: 10000,
          isClosable: true,
        })
      }
    >
      トーストを表示
    </Button>
  );
}

export function Toast() {
  return (
    <>
      <Title>Toast</Title>
      <Center p={4} w="500px">
        <Component />
      </Center>
    </>
  );
}
