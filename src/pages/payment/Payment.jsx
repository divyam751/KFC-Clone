// PaymentModal.jsx
import React, { useEffect, useState } from "react";
import "./Style.css";
import placed from "../../assets/OrderPlaced.gif";
import kfc from "../../assets/bucket_cart_icon.svg";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  Heading,
} from "@chakra-ui/react";

const Payment = ({ isOpen, onClose, trigger }) => {
  const [spinner, setSpinner] = useState(false);

  if (trigger) {
    localStorage.clear();

    setTimeout(() => {
      window.location.href = "/";
    }, 8000);

    setTimeout(() => {
      setSpinner(true);
    }, 3000);
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Flex justifyContent={"center"} minH={400} alignItems={"center"}>
            {spinner ? (
              <Flex flexDirection={"column"} alignItems={"center"} gap={5}>
                <img src={placed} alt='Order Placed' />
                <Heading fontSize={25}>Order Placed Successfully🍿</Heading>
              </Flex>
            ) : (
              <Flex flexDirection={"column"} alignItems={"center"} gap={5}>
                {" "}
                <div class='custom-Payment'></div> Your transaction is being
                processed
              </Flex>
            )}
          </Flex>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Payment;
