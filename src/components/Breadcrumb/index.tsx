import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
} from "@chakra-ui/react";
import { Title } from "../Title";

function Component() {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">一覧</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">アイテム1</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}

export function BreadcrumbDisplay() {
  return (
    <>
      <Title>Breadcrumb</Title>
      <Center p={4} w="500px">
        <Component />
      </Center>
    </>
  );
}
