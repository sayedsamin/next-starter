import { Ambulance } from "@/types/ambulance";

import AmbulanceCard from "./AmbulanceCard";
import { SelectType } from "./SelectType";

const AmbulanceList = async ({
  ambulanceList,
}: {
  ambulanceList: Ambulance[];
}) => {
  // const handleClick = () => {
  //   // Create a new URLSearchParams object using the current URL search parameters
  //   const searchParams = new URLSearchParams(window.location.search);

  //   searchParams.set("type", "Freezer");

  //   // Generate the new pathname with the updated search parameters
  //   const newPathname = `${
  //     window.location.pathname
  //   }?${searchParams.toString()}`;
  //   router.push(newPathname);
  // };

  return (
    <div>
      <section className="max-w-[1440px] mx-auto p-5 ">
        <div>
          <SelectType />
        </div>
        <div className="flex flex-row items-center justify-start flex-wrap gap-20">
          {ambulanceList.map((ambulance: Ambulance) => (
            <AmbulanceCard key={ambulance.ambulanceId} ambulance={ambulance} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AmbulanceList;
