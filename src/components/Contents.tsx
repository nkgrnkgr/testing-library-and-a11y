import { Divider, Stack } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export function Contents({ children }: Props) {
  return (
    <Stack gap={4} divider={<Divider />}>
      {children}
    </Stack>
  );
}
