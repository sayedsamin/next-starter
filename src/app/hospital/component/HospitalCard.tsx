"use client";
import React, { use } from "react";
import Image from "next/image";
import { Hospital } from "@/types/hospital";
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
import HospitalModal from "./HospitalModal";
import { GoDotFill } from "react-icons/go";
import { AiOutlineArrowRight } from "react-icons/ai";

function HospitalCard({ hospital }: { hospital: Hospital }) {
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
          <ModalHeader>Hospital Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HospitalModal hospital={hospital} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <div
        key={hospital.hospitalId}
        className="flex flex-row  bg-white w-[380px] min-h-[186px] rounded-lg mt-8 p-2 overflow-hidden hover:shadow-lg  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
        onClick={onOpen}
      >
        <div className="flex flex-col basis-1/5">
          {hospital.imageUrl ? (
            <Image
              className="w-[80px] h-[80px] rounded-lg"
              src={hospital.imageUrl}
              alt="hospital"
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
          <h1 className="text-2xl font-semibold font-sans">{hospital.name}</h1>
          <div className="flex flex-row text-sm font-normal text-gray-700 mt-1">
            <GoDotFill size="20" color="#2FC8BF" /> {hospital.area}
          </div>
          {hospital.bedsCount && (
            <div className="flex flex-row text-sm font-normal text-gray-700 mt-1">
              <GoDotFill size="20" color="#2FC8BF" /> {hospital.bedsCount} Beds
            </div>
          )}
        </div>
        <div className="self-end text-sm font-normal text-gray-700 mt-1">
          <AiOutlineArrowRight size="20" color="#2FC8BF" />
        </div>
      </div>
    </>
  );
}

export default HospitalCard;
