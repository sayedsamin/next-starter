import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import doctorIcon from "/public/images/doctor/doctor.png";
import dentistIcon from "/public/images/doctor/dentist.png";

const DoctorPage = async ({ searchParams }: { searchParams: any }) => {
  return (
    <main className="overflow-hidden bg-[#ECF4F4] min-h-screen">
      <section className="bg-no-repeat bg-center bg-cover bg-[url('/images/common/common-turq-bg.webp')] h-[30rem] ">
        <Navbar />
        <div className="flex h-full items-center justify-center pt-4 -mt-5">
          <div className="text-center">
            <h1 className=" text-xl tracking-[10px]  text-[#FFFFFF]">
              WELCOME
            </h1>
            <h1 className="text-4xl   font-bold text-[#FFFFFF] mt-4">
              Doctor Finder
            </h1>
            <h1 className="text-2xl  font-semibold text-[#FFFFFF] mt-16">
              Please select your desired category
            </h1>
          </div>
        </div>
      </section>

      <section className="flex flex-row items-center justify-center  -mt-[4rem]">
        <Link href={"/doctor/specialities"}>
          <div className="flex flex-col items-center justify-center w-[15rem] h-[10rem] bg-white rounded-lg shadow-lg hover:scale-110  ">
            <Image src={doctorIcon} alt="doctor logo" />
            <h1 className="mt-6 font-semibold text-lg">Doctors</h1>
          </div>
        </Link>

        <Link href={"/hospital"}>
          <div className="flex flex-col items-center justify-center w-[15rem] h-[10rem] bg-white ml-[1.5rem] rounded-lg shadow-lg hover:scale-110">
            <Image src={dentistIcon} alt="dentist logo" />

            <h1 className="mt-6 font-semibold text-lg">Dentists</h1>
          </div>
        </Link>
      </section>
    </main>
  );
};

export default DoctorPage;
