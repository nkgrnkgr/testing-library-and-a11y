import {
  Button,
  Center,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Title } from "../Title";

function Component() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>個人設定を開く</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>個人設定</ModalHeader>
          <ModalCloseButton />
          <ModalBody>詳細...</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              閉じる
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export function ModalDisplay() {
  return (
    <>
      <Title>Modal Display</Title>
      <Center p={4} w="500px">
        <Component />
      </Center>
    </>
  );
}
