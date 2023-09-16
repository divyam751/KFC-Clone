import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import "./Style.css";

const PayModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} size={"md"} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h2>
              cimus, neque quaerat magni dolor incidunt enim voluptatibus et
              soluta nesciunt ut reiciendis totam eligendi magnam aliquam qui
              explicabo a, asperiores necessitatibus. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Quae voluptatum illo,
              cupiditate placeat facilis unde nostrum doloremque accusantium?
              Vitae corrupti facilis ex sunt porro voluptatibus, quibusdam
              magnam hic quidem dolore! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ducimus, neque quaerat magni dolor incidunt enim
              voluptatibus et soluta nesciunt ut reiciendis totam eligendi
              magnam aliquam qui explicabo a, asperiores necessitatibus.
            </h2>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PayModal;
