"use client";

import React from "react";
import Image from "next/image";
import { Ambulance } from "@/types/ambulance";
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { GoDotFill } from "react-icons/go";
import { AiOutlineArrowRight } from "react-icons/ai";
import AmbulanceModal from "./AmbulanceModal";

function AmbulanceCard({ ambulance }: { ambulance: Ambulance }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal
        size="2xl"
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={true}
      >
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>Ambulance Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AmbulanceModal ambulance={ambulance} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div
        key={ambulance.ambulanceId}
        className="flex flex-row  bg-white w-[380px] min-h-[186px] rounded-lg mt-8 p-2 overflow-hidden hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
        onClick={onOpen}
      >
        <div className="flex flex-col basis-1/5">
          {ambulance.imageUrl ? (
            <Image
              className="w-[80px] h-[80px] rounded-lg"
              src={ambulance.imageUrl}
              alt="ambulance pics"
              width={80}
              height={80}
            />
          ) : (
            <Image
              className="w-[80px] h-[80px] rounded-full"
              src="/images/common/common-turq-bg.webp"
              alt="hospital"
              width={80}
              height={80}
            />
          )}
        </div>

        <div className="flex flex-col basis-4/5 px-2">
          <h1 className="text-2xl font-semibold font-sans">{ambulance.name}</h1>
          <div className="flex flex-row text-sm font-normal text-gray-700 mt-1">
            <GoDotFill size="20" color="#2FC8BF" /> {ambulance.area}
          </div>

          <div className="flex flex-row text-sm font-normal text-gray-700 mt-1">
            <GoDotFill size="20" color="#2FC8BF" /> {ambulance.type} Ambulance
          </div>
        </div>
        <div className="self-end text-sm font-normal text-gray-700 mt-1">
          <AiOutlineArrowRight size="20" color="#2FC8BF" />
        </div>
      </div>
    </>
  );
}

export default AmbulanceCard;
