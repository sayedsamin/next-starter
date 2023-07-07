import React from "react";
import { SearchBar } from "./SearchBar";
import axios from "axios";
import { Hospital } from "@/types/hospital";
import { activeUrl } from "@/constants";
import HospitalCard from "./HospitalCard";

const HospitalList = async () => {
  const response = await axios.get(
    `${activeUrl}/v1/hospitals?district=Chittagong`
  );

  return (
    <div className="bg-[#ECF4F4]">
      <section className="max-w-[1440px] mx-auto p-5 ">
        <div className="home__filters">
          <SearchBar />
        </div>
        <div className="flex flex-row items-center justify-center md:justify-between flex-wrap">
          {response.data &&
            response.data.map((hospital: Hospital) => (
              <HospitalCard key={hospital.hospitalId} hospital={hospital} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default HospitalList;
