import Link from "next/link";
import React from "react";
import AmbulanceList from "./component/AmbulanceList";
import { activeUrl } from "@/constants";

const AmbulancePage = async ({ searchParams }: { searchParams: any }) => {
  const type = searchParams.type || "all";

  const ambulances = await fetch(`${activeUrl}/v1/ambulances?type=${type}`, {
    next: {
      revalidate: 20,
    },
  }).then((res) => res.json());

  return (
    <main className="overflow-hidden bg-[#ECF4F4]">
      <section className="bg-no-repeat bg-center bg-cover bg-[url('/images/common/common-turq-bg.webp')] h-[300px] ">
        <div className="flex h-full items-center justify-center pt-20">
          <div className="text-center">
            <h2 className=" text-2xl  text-[#FFFFFF]">
              <Link href="/">Home</Link>
              {" >"} Ambulance
            </h2>
            <h1 className="text-4xl  font-bold text-[#FFFFFF] mt-2">
              List of Ambulances
            </h1>
          </div>
        </div>
      </section>
      <AmbulanceList ambulanceList={ambulances} />
    </main>
  );
};

export default AmbulancePage;
