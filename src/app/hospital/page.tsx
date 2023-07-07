import Link from "next/link";
import React from "react";
import HospitalList from "./component/HospitalList";

const HospitalPage = () => {
  return (
    <main className="overflow-hidden">
      <section className="bg-no-repeat bg-center bg-cover bg-[url('/images/common/common-turq-bg.webp')] h-[300px] ">
        <div className="flex h-full items-center justify-center pt-20">
          <div className="text-center">
            <h2 className=" text-2xl  text-[#FFFFFF]">
              <Link href="/">Home</Link>
              {" >"} Hospital
            </h2>
            <h1 className="text-4xl font-bold text-[#FFFFFF] mt-2">
              Hospitals and Diagnostic
            </h1>
          </div>
        </div>
      </section>
      <HospitalList />
    </main>
  );
};

export default HospitalPage;
