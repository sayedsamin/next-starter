import Image from "next/image";
import React from "react";
const specialityArray = [
  {
    name: "Anesthesiology",
    id: 0,
    // src: require("../../../../assets/icons/doctor/speciality-icons/Anesthesiology.png"),
    src: "/images/doctor/speciality-icons/Anesthesiology.png",
  },
  {
    name: "Burn & Plastic Surgery",
    id: 1,
    src: "/images/doctor/speciality-icons/Burn-and-Plastic-Surgery.png",
  },
  {
    name: "Cardiology",
    id: 2,
    // src: require("../../../../assets/icons/doctor/speciality-icons/Cardiology.png"),
    src: "/images/doctor/speciality-icons/Cardiology.png",
  },
  {
    name: "Cardiovascular Surgery",
    id: 3,
    // src: require("../../../../assets/icons/doctor/speciality-icons/Cardiovascular-Surgery.png"),
    src: "/images/doctor/speciality-icons/Cardiovascular-Surgery.png",
  },
  {
    name: "Child Specialist",
    id: 4,
    // src: require("../../../../assets/icons/doctor/speciality-icons/Child-Specialist.png"),
    src: "/images/doctor/speciality-icons/Child-Specialist.png",
  },
  {
    name: "Diabetes",
    id: 5,
    // src: require("../../../../assets/icons/doctor/speciality-icons/Diabetes.png"),
    src: "/images/doctor/speciality-icons/Diabetes.png",
  },
  {
    name: "ENT",
    id: 6,
    // src: require("../../../../assets/icons/doctor/speciality-icons/ENT.png"),
    src: "/images/doctor/speciality-icons/ENT.png",
  },
  {
    name: "Eye Specialist",
    id: 7,
    // src: require("../../../../assets/icons/doctor/speciality-icons/Eye-Specialist.png"),
    src: "/images/doctor/speciality-icons/Eye-Specialist.png",
  },
  {
    name: "Gastroenterology",
    id: 8,
    // src: require("../../../../assets/icons/doctor/speciality-icons/Gastroenterology.png"),
    src: "/images/doctor/speciality-icons/Gastroenterology.png",
  },
  //   {
  //     name: "General Physician",
  //     id: 9,
  //     src: require("../../../../assets/icons/doctor/speciality-icons/General-Physician.png"),
  //   },
  //   {
  //     name: "Hematology",
  //     id: 10,
  //     src: require("../../../../assets/icons/doctor/speciality-icons/Hematology.png"),
  //   },
  //   {
  //     name: "Hormone Specialist",
  //     id: 11,
  //     src: require("../../../../assets/icons/doctor/speciality-icons/Hormone-Specialist.png"),
  //   },
  //   {
  //     name: "Liver Specialist",
  //     id: 12,
  //     src: require("../../../../assets/icons/doctor/speciality-icons/Liver-Specialist.png"),
  //   },
  //   {
  //     name: "Medicine",
  //     id: 13,
  //     src: require("../../../../assets/icons/doctor/speciality-icons/Medicine.png"),
  //   },

  //   {
  //     name: "Nephrology",
  //     id: 14,
  //     src: require("../../../../assets/icons/doctor/speciality-icons/Nephrology.png"),
  //   },
  //   {
  //     name: "Neurology",
  //     id: 15,
  //     src: require("../../../../assets/icons/doctor/speciality-icons/Neurology.png"),
  //   },
  //   {
  //     name: "Neurosurgery",
  //     id: 16,
  //     src: require("../../../../assets/icons/doctor/speciality-icons/Neurosurgery.png"),
  //   },
  //   {
  //     name: "Obs & Gynea",
  //     id: 17,
  //     src: require("../../../../assets/icons/doctor/speciality-icons/Obs-and-Gynea.png"),
  //   },
  //   {
  //     name: "Oncologist",
  //     id: 18,
  //     src: require("../../../../assets/icons/doctor/speciality-icons/Oncologist.png"),
  //   },
  //   {
  //     name: "Orthopedics",
  //     id: 19,
  //     src: require("../../../../assets/icons/doctor/speciality-icons/Orthopedics.png"),
  //   },
  //   {
  //     name: "Pediatric Nephrology",
  //     id: 20,
  //     src: require("../../../../assets/icons/doctor/speciality-icons/Pediatric-Nephrology.png"),
  //   },
  //   {
  //     name: "Pediatric Surgery",
  //     id: 21,
  //     src: require("../../../../assets/icons/doctor/speciality-icons/Pediatric-Surgery.png"),
  //   },
  //   {
  //     name: "Psychiatrist",
  //     id: 22,
  //     src: require("../../../../assets/icons/doctor/speciality-icons/Psychiatrist.png"),
  //   },
  //   {
  //     name: "Respiratory Specialist",
  //     id: 23,
  //     src: require("../../../../assets/icons/doctor/speciality-icons/Respiratory-Specialist.png"),
  //   },
  //   {
  //     name: "Rheumatology",
  //     id: 24,
  //     src: require("../../../../assets/icons/doctor/speciality-icons/Rheumatology.png"),
  //   },
  //   {
  //     name: "Sex Disease Specialist",
  //     id: 25,
  //     src: require("../../../../assets/icons/doctor/speciality-icons/Sex-Disease-Specialist.png"),
  //   },
  //   {
  //     name: "Skin/Dermatology",
  //     id: 26,
  //     src: require("../../../../assets/icons/doctor/speciality-icons/Skin-and-Dermatology.png"),
  //   },
  //   {
  //     name: "Surgery",
  //     id: 27,
  //     src: require("../../../../assets/icons/doctor/speciality-icons/Surgery.png"),
  //   },
  //   {
  //     name: "Thoracic Surgery",
  //     id: 28,
  //     src: require("../../../../assets/icons/doctor/speciality-icons/Thoracic-Surgery.png"),
  //   },
  //   {
  //     name: "Urologist",
  //     id: 29,
  //     src: require("../../../../assets/icons/doctor/speciality-icons/Urologist.png"),
  //   },
];
const SpecialityPage = ({ searchParams }: { searchParams: any }) => {
  return (
    <main className="overflow-hidden bg-[#ECF4F4] min-h-screen">
      <div className="flex flex-row items-center justify-center  -mt-[4rem]">
        {specialityArray.map((speciality) => {
          return (
            <div
              key={speciality.id}
              className="flex flex-col items-center justify-center w-[15rem] h-[10rem] bg-white ml-[1.5rem] rounded-lg shadow-lg hover:scale-110"
            >
              <Image
                src={speciality.src}
                alt="Picture of the author"
                width={100}
                height={100}
              />
              <h1>{speciality.name}</h1>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default SpecialityPage;
