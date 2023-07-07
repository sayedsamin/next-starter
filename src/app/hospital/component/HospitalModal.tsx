import { Hospital } from "@/types/hospital";
import Image from "next/image";
import React from "react";

function HospitalModal({ hospital }: { hospital: Hospital }) {
  const {
    hospitalId,
    name,
    imageUrl,
    description,
    phone,
    area,
    bedsCount,
    hasIcu,
    hasHdu,
    hasNicu,
    lat,
    lng,
  } = hospital;
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
        {description && (
          <div className="text-sm font-normal text-gray-700 mt-1 text-center">
            {description}
          </div>
        )}

        {/* Location  */}
        <div className="flex flex-col border-2 rounded-lg mt-3">
          <h2 className="p-2 text-gray-500">Location</h2>
          <div className="flex flex-row px-2">
            <div className="text-lg font-normal text-gray-700">{area}</div>
          </div>
        </div>

        {/* Beds and ICU */}
        <div className="flex flex-row gap-3 mt-3">
          <div className="border-2 basis-1/2 rounded-lg p-2">
            <h2 className=" text-gray-500">Beds</h2>
            <div className="text-lg font-normal text-gray-700">{bedsCount}</div>
          </div>

          <div className="border-2 basis-1/2 rounded-lg  p-2">
            <h2 className=" text-gray-500">ICU Availability</h2>
            <div className="text-lg font-normal text-gray-700">{hasIcu}</div>
          </div>
        </div>

        {/* HDU and NICU */}
        <div className="flex flex-row gap-3 mt-3">
          <div className="border-2 basis-1/2 rounded-lg  p-2">
            <h2 className=" text-gray-500">NICU Availability</h2>
            <div className="text-lg font-normal text-gray-700">{hasNicu}</div>
          </div>
          <div className="border-2 basis-1/2 rounded-lg p-2">
            <h2 className=" text-gray-500">HDU Availability</h2>
            <div className="text-lg font-normal text-gray-700">{hasHdu}</div>
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

export default HospitalModal;
