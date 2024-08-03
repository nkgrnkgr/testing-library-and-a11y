import {
  Center,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Title } from "../Title";

function Component() {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>日本の人口推移</TableCaption>
        <Thead>
          <Tr>
            <Th>年</Th>
            <Th>人口</Th>
            <Th>増加率(%)</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1900</Td>
            <Td isNumeric>4480万人</Td>
            <Td isNumeric> </Td>
          </Tr>
          <Tr>
            <Td>1925</Td>
            <Td isNumeric>5970万人</Td>
            <Td isNumeric>33.3%</Td>
          </Tr>
          <Tr>
            <Td>1950</Td>
            <Td isNumeric>8320万人</Td>
            <Td isNumeric>39.4%</Td>
          </Tr>
          <Tr>
            <Td>1975</Td>
            <Td isNumeric>1億1190万人</Td>
            <Td isNumeric>34.5%</Td>
          </Tr>
          <Tr>
            <Td>2000</Td>
            <Td isNumeric>1億2690万人</Td>
            <Td isNumeric>13.4%</Td>
          </Tr>
          <Tr>
            <Td>2024</Td>
            <Td isNumeric>1億2460万人</Td>
            <Td isNumeric>-1.8%</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export function TableDisplay() {
  return (
    <>
      <Title>Table</Title>
      <Center p={4} w="500px">
        <Component />
      </Center>
    </>
  );
}
