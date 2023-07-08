import Link from "next/link";
import React from "react";
import HospitalList from "./component/HospitalList";
import Navbar from "@/components/Navbar";

const HospitalPage = () => {
  return (
    <main className="overflow-hidden">
      <section className="bg-no-repeat bg-center bg-cover bg-[url('/images/common/common-turq-bg.webp')] h-[300px] ">
        <Navbar />
        <div className="flex h-full items-center justify-center ">
          <div className="text-center">
            <h2 className=" text-xl  text-[#FFFFFF]">
              <Link href="/">Home</Link>
              {" >"} Hospital
            </h2>
            <h1 className="text-4xl font-bold text-[#FFFFFF] mt-2">
              Hospitals and Diagnostics
            </h1>
          </div>
        </div>
      </section>
      <HospitalList />
    </main>
  );
};

export default HospitalPage;
