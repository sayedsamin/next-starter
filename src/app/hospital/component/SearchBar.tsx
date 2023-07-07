"use client";

import React from "react";
import { Input, InputGroup, InputLeftElement, Select } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchBar = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between pt-3 ">
      <InputGroup w={"300px"} className="">
        <InputLeftElement className=" cursor-pointer">
          <AiOutlineSearch color="gray.200" size="30" />
        </InputLeftElement>
        <Input placeholder="Search" className="bg-white" />
      </InputGroup>

      <InputGroup w={"300px"} className="">
        <Select placeholder="Select District" className="bg-white">
          <option selected value="option1">
            Chittagong
          </option>
        </Select>
      </InputGroup>
    </div>
  );
};
