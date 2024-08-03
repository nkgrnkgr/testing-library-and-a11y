import { Center, Link } from "@chakra-ui/react";
import { Title } from "../Title";

function Component() {
  return (
    <Link href="https://github.com" isExternal>
      Github.com
    </Link>
  );
}

export function LinkDisplay() {
  return (
    <>
      <Title>Link</Title>
      <Center p={4} w="500px">
        <Component />
      </Center>
    </>
  );
}
