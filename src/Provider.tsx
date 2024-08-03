import { ChakraProvider } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export function Provider({ children }: Props) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
