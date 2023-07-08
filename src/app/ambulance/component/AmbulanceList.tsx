import { Ambulance } from "@/types/ambulance";

import AmbulanceCard from "./AmbulanceCard";
import { SelectType } from "./SelectType";

const AmbulanceList = async ({
  ambulanceList,
}: {
  ambulanceList: Ambulance[];
}) => {
  return (
    <div>
      <section className="max-w-[1440px] mx-auto p-5  ">
        <div className="">
          <SelectType />
        </div>
        <div className="flex flex-row items-center justify-between flex-wrap">
          {ambulanceList.map((ambulance: Ambulance) => (
            <AmbulanceCard key={ambulance.ambulanceId} ambulance={ambulance} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AmbulanceList;
