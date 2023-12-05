import { PiBandaidsFill } from "react-icons/pi";

export default function SmallSection({ affected, critical }) {
  return (
    <div className="w-full h-full rounded p-4 flex flex-col gap-2" style={{backgroundColor:"#202128"}}>
      <h2>Local Credentials</h2>
      <div className="flex flex-col">
        <p className="flex items-center justify-between text-sm gap-2">
          <span className="w-1/3">Complexity:</span>
          <div className="flex gap-1 ml-6">
            <div className="p-1 py-[0.4rem] rounded-sm bg-redBg"></div>
            <div className="p-1 py-[0.4rem] rounded-sm bg-secondaryBg"></div>
            <div className="p-1 py-[0.4rem] rounded-sm bg-secondaryBg"></div>
          </div>
          <span className="text-redBg">Low</span>
        </p>
        <p className="flex items-center justify-between text-sm gap-2">
          <span className="w-1/3">Severity:</span>
          <div className="flex gap-1">
            <div
              className={`p-1 py-[0.4rem] rounded-sm ${
                affected === 10 ? "bg-yellowBg" : "bg-redBg"
              }`}
            ></div>
            <div
              className={`p-1 py-[0.4rem] rounded-sm ${
                affected === 10 ? "bg-yellowBg" : "bg-redBg"
              }`}
            ></div>
            <div
              className={`p-1 py-[0.4rem] rounded-sm ${
                affected === 10 ? "bg-secondaryBg" : "bg-redBg"
              }`}
            ></div>
          </div>
          <span className={affected === 10 ? "text-yellowBg" : "text-redBg"}>
            {affected === 10 ? "Medium" : "High"}
          </span>
        </p>
        <div className="flex gap-2 py-4">
          <p className="flex flex-col items-center justify-start text-center text-xs w-1/2">
            <span className="text-xl">{affected}%</span>Affected entities
          </p>
          <p className="flex flex-col items-center text-redBg justify-start text-xs text-center w-1/2">
            <span className="text-xl">{critical}%</span>Critical assets at risk
          </p>
        </div>
        <button className="w-full p-2 flex items-center justify-center gap-2">
          <PiBandaidsFill className="w-6 h-6" />
          View remediations
        </button>
      </div>
    </div>
  );
}
