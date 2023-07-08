"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { InputGroup, Select } from "@chakra-ui/react";

export const SelectType = () => {
  const [type, setType] = React.useState("all"); // ["all", "Normal", "Icu", "Freezer", "Air"]
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("type", e.target.value);
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathname);
  };

  return (
    <div className=" flex flex-row">
      <Select placeholder="Select District" className="bg-white" w="200px">
        <option selected value="option1">
          Chittagong
        </option>
      </Select>

      <Select
        bg="white"
        placeholder="Select option"
        value={type}
        onChange={handleChange}
        w="200px"
        alignSelf={{ base: "center", md: "flex-end" }}
        ml={"4"}
      >
        <option value="all">All</option>
        <option value="Normal">Normal</option>
        <option value="Icu">ICU</option>
        <option value="Freezer">Freezer</option>
        <option value="Air">Air Ambulance</option>
      </Select>
    </div>
  );
};
