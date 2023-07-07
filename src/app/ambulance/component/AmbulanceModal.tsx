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
        <h1 className="text-2xl font-bold text-center mt-2">{name}</h1>

        {/* Location  */}
        <div className="flex flex-col border-2 rounded-lg mt-3">
          <h2 className="p-2 text-gray-500">Location</h2>
          <div className="flex flex-row px-2">
            <div className="text-lg font-normal text-gray-700">{area}</div>
          </div>
        </div>

        {/* Phone Numbers */}

        <div className="flex flex-col border-2 rounded-lg mt-3">
          <h2 className="p-2 text-gray-500">Phone Number</h2>
          {phone.map((p, index) => (
            <div key={p} className="flex flex-row px-2">
              <div className="text-lg font-normal text-gray-700">{p}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AmbulanceModal;
