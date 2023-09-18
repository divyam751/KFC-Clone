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
import { useState } from "react";

const PayModal = ({ setPayType, payType, userData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [payMethod, setPayMethod] = useState("");

  const validation = () => {
    if (
      userData.name === "" ||
      userData.email === "" ||
      userData.phoneNumber === "" ||
      userData.deliveryAddress === ""
    ) {
      alert("Please Enter Correct Details");
      return;
    }
    onOpen();
  };

  const handleSubmit = () => {
    setPayType(payMethod);
    onClose();
  };

  const handleChange = (e) => {
    setPayMethod(e.target.value);
  };
  return (
    <>
      {payType === "" ? (
        <button onClick={validation} className='checkout-form-submit'>
          Select Payment
        </button>
      ) : (
        ""
      )}

      <Modal isOpen={isOpen} size={"md"} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={"gray.200"}>
          <ModalHeader fontSize={25} fontWeight={"bold"}>
            SELECT YOUR PAYMENT
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className='PayModal-parent'>
              <div className='PayModal-child'>
                <label>
                  <input
                    type='radio'
                    name='paymentOption'
                    value='Card'
                    onChange={handleChange}
                  />
                  <span className='lable-name'>Credit/Debit Card</span>
                </label>
              </div>
              <div className='PayModal-child'>
                <label>
                  <input
                    type='radio'
                    name='paymentOption'
                    value='Netbanking'
                    onChange={handleChange}
                  />
                  <span className='lable-name'>Netbanking</span>
                </label>
              </div>
              <div className='PayModal-child'>
                <label>
                  <input
                    type='radio'
                    name='paymentOption'
                    value='Cash'
                    onChange={handleChange}
                  />
                  <span className='lable-name'>Cash</span>
                </label>
              </div>
              <div className='PayModal-child'>
                <label>
                  <input
                    type='radio'
                    name='paymentOption'
                    value='UPI'
                    onChange={handleChange}
                  />
                  <span className='lable-name'>UPI</span>
                </label>
              </div>
            </div>
          </ModalBody>

          <ModalFooter justifyContent={"center"}>
            <Button
              colorScheme='blue'
              mr={3}
              onClick={handleSubmit}
              pl={10}
              pr={10}
              pt={4}
              pb={4}
              borderRadius={30}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PayModal;
