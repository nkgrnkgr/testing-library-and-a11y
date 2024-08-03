import { Divider, Stack } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export function Contents({ children }: Props) {
  return (
    <Stack gap={12} divider={<Divider p={4} />}>
      {children}
    </Stack>
  );
}
