import {
  Center,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { Title } from "../Title";

function Component() {
  return (
    <Stat>
      <StatLabel>日経平均株価</StatLabel>
      <StatNumber>35,909.70</StatNumber>
      <StatHelpText>
        <StatArrow type="decrease" />
        −2,216.63 (5.81%)今日
      </StatHelpText>
    </Stat>
  );
}

export function StatDisplay() {
  return (
    <>
      <Title>Stat</Title>
      <Center p={4} w="500px">
        <Component />
      </Center>
    </>
  );
}
