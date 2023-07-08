import { Ambulance } from "@/types/ambulance";
import Image from "next/image";
import React from "react";

function AmbulanceModal({ ambulance }: { ambulance: Ambulance }) {
  const {
    ambulanceId,
    name,
    imageUrl,
    phone,
    email,
    district,
    thana,
    area,
    type,
    lat,
    lng,
  } = ambulance;

  return (
    <div>
      <div className="h-[200px] overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="hospital"
            width="600"
            height="200"
            object-fit="fill"
            className="rounded-lg mx-auto hover:opacity-80 transition-opacity duration-300 ease-in-out"
          />
        ) : (
          <img
            src="/images/common/hospital-placeholder.png"
            alt="hospital"
            width={100}
            height={100}
          />
        )}
      </div>
      <div className="flex flex-col ">
        <h1 className="text-2xl font-semibold text-center mt-6">{name}</h1>

        {/* Location  */}
        <div className="text-lg font-normal text-gray-500 text-center">
          {area}
        </div>

        <div className="flex flex-col border-2 rounded-lg mt-3 p-4">
          <h2 className=" text-gray-500">Ambulance Type</h2>
          <div className="flex flex-row">
            <div className="text-lg font-normal text-gray-700">{type}</div>
          </div>
        </div>

        {/* Phone Numbers */}

        {phone.map((p, index) => (
          <div
            key={p}
            className="flex flex-col bg-[#EFF4F6] rounded-lg mt-3 p-4"
          >
            <h2 className=" text-gray-500">Phone Number</h2>
            <div className="flex flex-row ">
              <div className="text-lg font-normal text-gray-700">{p}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AmbulanceModal;
