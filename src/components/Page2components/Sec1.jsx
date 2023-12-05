import { useState } from "react";
import { BsHexagon } from "react-icons/bs";
import { FaArrowTrendDown } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import graph from "./graph.png";

export default function Section1() {
  const [isActive, setIsActive] = useState(0);
  return (
    <section
      className="w-full h-1/3 flex flex-wrap sm:justify-start justify-center gap-4 rounded p-4"
      style={{ backgroundColor: "#202128" }}
    >
      <div
        className="h-full flex flex-col items-center justify-between gap-1 rounded p-3"
        style={{ backgroundColor: "#2b2b36" }}
      >
        <h1 className="w-full text-lg flex justify-center gap-2">
          Security Score
          <span className="text-xs px-[0.3rem] h-fit rounded-full border">
            ?
          </span>
        </h1>
        <div className="relative flex h-16 justify-center items-center">
          <BsHexagon className="absolute rotate-90 w-16 h-16 text-[orange] text-yellowBg top-0" />
          <h1 className="text-xl z-10">C</h1>
        </div>
        <h1 className="text-lg">70</h1>
        <p className="flex gap-3 items-center">
          {" "}
          -1 <FaArrowTrendDown />
          From last month
        </p>
      </div>
      <div className="flex flex-col justify-between gap-5">
        <div className="flex flex-col text-sm">
          <h2 className="text-lg">Compare Scenarios</h2>
          <h3 className="mt-2 text-secondaryText flex items-center gap-2">
            <span className="rounded-full bg-yellowBg p-1"></span>Azure to AWS_2
          </h3>
          <h3 className="text-secondaryText flex items-center gap-2">
            <span className="rounded-full bg-[#9f6c9d] p-1"></span>Hybrid risk
            to Customer Data
          </h3>
          <h3 className="text-secondaryText flex items-center gap-2">
            <span className="rounded-full bg-[#839e5a] p-1"></span>Log4Shell
            (CVE-2021-44228) Risk from..
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <IoSettingsOutline className="w-5 h-5" />
          <p>Select Scenarios</p>
        </div>
      </div>
      <div className="flex-grow h-full flex-col">
        <div className="flex md:gap-1 text-sm">
          <button
            onClick={() => setIsActive(0)}
            className={`md:p-2 sm:p-1 md:px-4 px-2 border-b-2 ${
              isActive === 0 ? "border-purleBg" : "border-transparent"
            }`}
          >
            1 Week
          </button>
          <button
            onClick={() => setIsActive(1)}
            className={`md:p-2 sm:p-1 md:px-4 px-2 border-b-2 ${
              isActive === 1 ? "border-purleBg" : "border-transparent"
            }`}
          >
            1 Months
          </button>
          <button
            onClick={() => setIsActive(2)}
            className={`md:p-2 sm:p-1 md:px-4 px-2 border-b-2 ${
              isActive === 2 ? "border-purleBg" : "border-transparent"
            }`}
          >
            3 Months
          </button>
          <button
            onClick={() => setIsActive(3)}
            className={`md:p-2 sm:p-1 md:px-4 px-2 border-b-2 ${
              isActive === 3 ? "border-purleBg" : "border-transparent"
            }`}
          >
            6 Months
          </button>
        </div>
        <div className="w-full h-32 overflow-x-auto">
          <img src={graph} alt="" className="w-auto h-32 object-contain" />
        </div>
      </div>
    </section>
  );
}
