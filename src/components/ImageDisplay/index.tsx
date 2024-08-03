import { Box, Center, Image } from "@chakra-ui/react";
import { Title } from "../Title";

function Component() {
  return (
    <Box>
      <Image
        src="https://via.placeholder.com/150"
        w={150}
        h={150}
        alt="150 x 150 placeholder"
      />
    </Box>
  );
}

export function ImageDisplay() {
  return (
    <>
      <Title>Image</Title>
      <Center p={4} w="500px">
        <Component />
      </Center>
    </>
  );
}
