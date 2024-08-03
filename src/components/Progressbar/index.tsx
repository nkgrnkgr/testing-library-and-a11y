import {
  Center,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { Title } from "../Title";

function Component() {
  return (
    <CircularProgress value={40} color="green.400">
      <CircularProgressLabel>40%</CircularProgressLabel>
    </CircularProgress>
  );
}

export function Progressbar() {
  return (
    <>
      <Title>ProgressBar</Title>
      <Center p={4} w="500px">
        <Component />
      </Center>
    </>
  );
}
