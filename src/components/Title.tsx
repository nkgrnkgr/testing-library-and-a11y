import { Heading } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export function Title({ children }: Props) {
  return (
    <Heading p={2} as="h2" size="lg">
      {children}
    </Heading>
  );
}
