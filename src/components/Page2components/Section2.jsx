import { BsHexagon } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Section2() {
  const grad = {
    backgroundImage:
      "conic-gradient(#c0183d 120deg,#f37626 120deg,#f37626 240deg,#82a54f 120deg)",
  };
  return (
    <section className="h-1/4 flex lg:flex-row flex-col w-full gap-4">
      <div className="flex w-full flex-col gap-2">
        <div className="flex gap-4 w-full">
          <h2>Scenarios at high risk</h2>
          <button className="text-xs">View all</button>
        </div>
        <div
          className="rounded p-4 md:px-8 flex flex-col flex-grow justify-center gap-2"
          style={{ backgroundColor: "#202128" }}
        >
          <div className="flex w-full justify-between gap-4 md:flex-nowrap flex-wrap items-center">
            <div className="flex gap-4 items-center">
              <div className="relative flex items-center w-10 h-10 justify-center">
                <BsHexagon className="absolute w-10 h-10 rotate-90 text-[orange] text-redBg" />
                <span className="text-tertiaryBg z-10">F</span>
              </div>
              <h2 className="text-sm">
                {"(22) - On - Prem Risk | Workstations > DC"}
              </h2>
            </div>
            <div className="w-28 h-7 bg-blue-800"></div>
            <button className="p-2 text-sm border rounded">Take action</button>
          </div>
          <div className="flex w-full justify-between gap-4 md:flex-nowrap flex-wrap items-center">
            <div className="flex gap-4 items-center">
              <div className="relative flex items-center w-10 h-10 justify-center">
                <BsHexagon className="absolute w-10 h-10 rotate-90 text-[orange] text-redBg" />
                <span className="text-tertiaryBg z-10">F</span>
              </div>
              <h2 className="text-sm">
                {"(22) - On - Prem Risk | Workstations > DC"}
              </h2>
            </div>
            <div className="w-28 h-7 bg-blue-800"></div>
            <button className="p-2 text-sm border rounded">Take action</button>
          </div>
          <div className="flex w-full justify-between gap-4 md:flex-nowrap flex-wrap items-center">
            <div className="flex gap-4 items-center">
              <div className="relative flex items-center w-10 h-10 justify-center">
                <BsHexagon className="absolute w-10 h-10 rotate-90 text-[orange] text-redBg" />
                <span className="text-tertiaryBg z-10">F</span>
              </div>
              <h2 className="text-sm">
                {"(22) - On - Prem Risk | Workstations > DC"}
              </h2>
            </div>
            <div className="w-28 h-7 bg-blue-800"></div>
            <button className="p-2 text-sm border rounded">Take action</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex gap-4 w-full">
          <h2>Critical assets at risk</h2>
          <button className="text-xs">View all</button>
        </div>
        <div
          className="w-full flex-grow rounded flex md:flex-row flex-col-reverse p-4 md:px-8 items-center gap-5"
          style={{ backgroundColor: "#202128" }}
        >
          <div className="w-full">
            <h2 className="md:text-base text-sm">
              Critical assets compromised by attack vectors with the lowest
              average complexity
            </h2>
            <table className="w-full md:text-sm text-xs">
              <thead>
                <tr className="border-b border-gray-400">
                  <td className="w-[60%] py-1 px-3">Critical asset name</td>
                  <td className="w-[20%] py-1 px-4">Avg. complexity</td>
                  <td className="w-[20%] py-1 px-4">Trend</td>
                </tr>
              </thead>
              <tbody className="text-[10px]">
                <tr className="border-b border-gray-600">
                  <td className="py-1 px-4">Raymond Butcher</td>
                  <td className="py-1 flex items-center justify-end gap-2 px-4">
                    2
                    <div className="flex gap-1">
                      <div className="p-1 py-[0.4rem] rounded-sm bg-redBg"></div>
                      <div className="p-1 py-[0.4rem] rounded-sm bg-secondaryBg"></div>
                      <div className="p-1 py-[0.4rem] rounded-sm bg-secondaryBg"></div>
                    </div>
                    <span className="text-redBg">Low</span>
                  </td>
                  <td className="py-1 px-4">
                    <FaLongArrowAltRight className="w-4 h-4" />
                  </td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-1 px-4">testing</td>
                  <td className="py-1 flex items-center gap-2 px-4 justify-end">
                    2
                    <div className="flex gap-1">
                      <div className="p-1 py-[0.4rem] rounded-sm bg-redBg"></div>
                      <div className="p-1 py-[0.4rem] rounded-sm bg-secondaryBg"></div>
                      <div className="p-1 py-[0.4rem] rounded-sm bg-secondaryBg"></div>
                    </div>
                    <span className="text-redBg">Low</span>
                  </td>
                  <td className="py-1 px-4">
                    <FaLongArrowAltRight className="w-4 h-4" />
                  </td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-1 px-4">ATM-Jump-Server</td>
                  <td className="py-1 flex items-center gap-2 px-4 justify-end">
                    2.11
                    <div className="flex gap-1">
                      <div className="p-1 py-[0.4rem] rounded-sm bg-redBg"></div>
                      <div className="p-1 py-[0.4rem] rounded-sm bg-secondaryBg"></div>
                      <div className="p-1 py-[0.4rem] rounded-sm bg-secondaryBg"></div>
                    </div>
                    <span className="text-redBg">Low</span>
                  </td>
                  <td className="py-1 px-4">
                    <FaLongArrowAltRight className="w-4 h-4" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-32 h-32  rounded-full" style={grad}>
              <div
                className="w-28 h-28 rounded-full absolute m-2"
                style={{ backgroundColor: "#202128" }}
              >
                <div className="text-center mt-6">
                  <span className="text-xl">498</span> <br />
                  <span className="text-xs text-grey">
                    Critical assests at risk
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
