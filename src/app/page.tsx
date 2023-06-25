/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import googlePlay from "../../public/images/homePage/googleplay.png";
import appStore from "../../public/images/homePage/appstore.png";
import heroImage from "../../public/images/homePage/hero-image.png";
import iconsCombo from "../../public/images/homePage/icons-combo.png";
import docHero from "../../public/images/homePage/doc-hero.png";

import doctorIcon from "../../public/images/homePage/doctor-icon.png";
import bloodIcon from "../../public/images/homePage/blood-icon.png";
import ambulanceIcon from "../../public/images/homePage/ambulance-icon.png";
import hospitalIcon from "../../public/images/homePage/hospital-icon.png";

export default function Home() {
  return (
    <>
      {HomeUpperCard()}
      {ServicesCard()}
    </>
  );
}

function HomeUpperCard() {
  return (
    <div className="bg-no-repeat bg-center bg-cover bg-[url('/images/homePage/hero-bg.webp')] ">
      <div className="flex flex-col md:flex-row pt-24 lg:ml-[200px] items-center justify-between">
        <div className="text-center md:text-start">
          <h2 className=" text-2xl tracking-[10px]  text-[#FFFFFF]">
            YOUR NEXT DOOR
          </h2>
          <h1 className="text-6xl   font-bold text-[#FFFFFF]">HEALTHCARE</h1>
          <h1 className="text-4xl  font-bold text-[#FFFFFF]">
            Now at your fingertips.
          </h1>
          <h2 className="mt-10 text-xl font-bold text-[#FFFFFF]">
            Download the app
          </h2>
          <div className="flex flex-col md:flex-row mt-4 ">
            <a
              className="mx-auto md:mx-0"
              href="https://play.google.com/store/apps/details?id=com.aromohealth.aromohealth"
              target="_blank"
            >
              <div>
                <Image src={googlePlay} alt="Google Play Icon" />
              </div>
            </a>
            <a
              className="mt-3 md:mt-0 mx-auto  md:mx-0 md:ml-4"
              href=""
              target="_blank"
            >
              <div>
                <Image src={appStore} alt="App Store Icon" />
              </div>
            </a>
          </div>
        </div>

        <div className="flex lg:mr-[200px] justify-center">
          <div className="relative mt-20 md:mt-0 w-[730px] h-[584px]">
            <Image
              src={heroImage}
              alt="Hero Image"
              fill={true}
              priority={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesCard() {
  return (
    <div className="bg-[#F5F9F9] pt-20">
      {provideComp()}
      {featuresComp()}
      {doctorComp()}
      {bloodComp()}
      {ambulanceComp()}
      {/* {hospitalComp()} */}
      {/* {contactComp()} */}
      {/* {ctaComp()} */}
    </div>
  );
}

function provideComp() {
  return (
    <div className="text-center px-3 xl:px-[450px]">
      <h1 className="text-xl tracking-[10px] text-[#6A6D87]">WE PROVIDE</h1>
      <p className="text-4xl text-center font-bold mt-4 text-[#303053]">
        Easy access to{" "}
        {/* https://daily-dev-tips.com/posts/making-gradient-text-with-tailwind-css/ */}
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00B8BA] to-[#009294]">
          healthcare
        </span>{" "}
        facilities on the palm of your hands.
      </p>
    </div>
  );
}

function featuresComp() {
  return (
    <div className="flex md:flex-row justify-center items-center pt-8 md:pt-16  ">
      <div className="flex flex-col items-center">
        <div className="relative w-80 h-20 sm:w-[670px] sm:h-[152px]">
          <Image src={iconsCombo} alt="Icons Combo" />
        </div>
      </div>
    </div>
  );
}

function doctorComp() {
  return (
    <div className="flex flex-col md:flex-row  items-center pt-28 lg:ml-[200px] lg:mr-[200px] ">
      <div className=" basis-2/5">
        <div className="relative">
          <Image src={docHero} alt="Doctor Consultation" placeholder="blur" />
        </div>
      </div>
      <div className="basis-3/5 p-3 md:p-0 md:ml-16 mt-10 md:mt-0">
        <div className="flex">
          {/* <img loading="lazy" src={doctorIcon} alt="Doctor Icon" /> */}
          <div className="relative w-[52px] h-[52px]">
            <Image
              src="/images/homePage/doctor-icon.png"
              alt="Doctor Icon"
              fill={true}
              loading="lazy"
            />
          </div>
          <h1 className="mt-auto text-4xl text-[#303053] font-semibold ml-3">
            Doctor
          </h1>
        </div>
        <h1 className="text-6xl text-transparent font-bold bg-clip-text bg-gradient-to-b from-[#108e91] to-[#009294] ">
          Consultation
        </h1>
        <h2 className="text-2xl font-semibold mt-8 text-[#303053]">
          Looking for a doctor near you? Our app has got you covered!
        </h2>
        <p className="text-lg mt-3 text-[#6A6D87]">
          With our easy-to-use location-based search, you can quickly find
          highly qualified doctors in your area. And the best part? You can also
          check their schedule so you can book an appointment at a time that
          suits you.
        </p>
      </div>
    </div>
  );
}

function bloodComp() {
  return (
    <div className="flex flex-col  md:flex-row  items-center mt-16 pt-16 pb-16 lg:pl-[200px] lg:pr-[200px] bg-[#FFFFFF]">
      <div className="basis-3/5 p-3 md:p-0 md:mr-16">
        <div className="flex">
          <div className="relative w-[52px] h-[52px]">
            <Image
              src="/images/homePage/blood-icon.png"
              alt="Blood Icon"
              fill={true}
              loading="lazy"
            />
          </div>

          <h1 className="mt-auto text-4xl text-[#303053] font-semibold ml-3">
            Donate
          </h1>
        </div>
        <h1 className="text-6xl text-transparent font-bold bg-clip-text bg-gradient-to-b from-[#F15362] to-[#B93A4D] ">
          URGENT BLOOD
        </h1>
        <h2 className="text-2xl font-semibold mt-8 text-[#303053]">
          Looking for a way to help save lives? Our app makes it easy to connect
          with blood donors in your area.
        </h2>
        <p className="text-lg mt-3 text-[#6A6D87]">
          Simply request the blood you need and our network of registered donors
          will receive a notification. With our quick and simple request
          process, you can get the blood you need without delay.
        </p>
      </div>

      <div className="basis-2/5">
        {/* <img
          loading="lazy"
          class="p-3 md:p-0"
          src={bloodHero}
          alt="Blood Donation"
        /> */}

        <div className="relative w-[518px] h-[535px]">
          <Image
            src="/images/homePage/blood-hero.png"
            alt="Blood Donation"
            fill={true}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

function ambulanceComp() {
  return (
    <div className="flex flex-col md:flex-row  items-center mt-20 lg:ml-[200px] lg:mr-[200px] ">
      <div className="basis-2/5">
        {/* <img
          loading="lazy"
          class="p-3 md:p-0"
          src={ambulanceHero}
          alt="Ambulance"
        /> */}
      </div>
      <div className="basis-3/5 p-3 md:p-0 md:ml-16 mt-10 md:mt-0">
        <div className="flex">
          {/* <img loading="lazy" src={ambulanceIcon} alt="Doctor Icon" /> */}
          <h1 className="mt-auto text-4xl text-[#303053] font-semibold ml-3">
            Call
          </h1>
        </div>
        <h1 className="text-6xl text-transparent font-bold bg-clip-text bg-gradient-to-b from-[#00B8BA] to-[#009294] ">
          AMBULANCE
        </h1>
        <h2 className="text-2xl font-semibold mt-8 text-[#303053]">
          When it comes to medical emergencies, every second counts!
        </h2>
        <p className="text-lg mt-3 text-[#6A6D87]">
          That's why our app makes it easy to find the nearest ambulances to
          your location. With just a few taps, you can quickly request emergency
          medical assistance and get the help you need.
        </p>
      </div>
    </div>
  );
}
