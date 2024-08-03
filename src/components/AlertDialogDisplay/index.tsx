import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Center,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Title } from "../Title";

function Component() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>
        削除する
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              削除の確認
            </AlertDialogHeader>

            <AlertDialogBody>本当に削除してもよろしいですか？</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                キャンセル
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                削除
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export function AlertDialogDisplay() {
  return (
    <>
      <Title>Alert Dialog Display</Title>
      <Center p={4} w="500px">
        <Component />
      </Center>
    </>
  );
}
