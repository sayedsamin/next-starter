"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Select } from "@chakra-ui/react";

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
    <Select
      bg="white"
      placeholder="Select option"
      value={type}
      onChange={handleChange}
    >
      <option value="all">All</option>
      <option value="Normal">Normal</option>
      <option value="Icu">ICU</option>
      <option value="Freezer">Freezer</option>
      <option value="Air">Air Ambulance</option>
    </Select>
  );
};
