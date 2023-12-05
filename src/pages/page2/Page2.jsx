import { FaChevronDown } from "react-icons/fa6";
import Section1 from "../../components/Page2components/Sec1";
import Section2 from "../../components/Page2components/Section2";
import Section3 from "../../components/Page2components/Section3";

export default function Page2() {
  return (
    <section className="min-h-screen md:p-8 p-4 bg-primaryBg font-bold text-white flex flex-col gap-4">
      <Section1 />
      <section className="flex gap-4">
        <button className="flex items-center gap-2 p-2">
          All Scenarios <FaChevronDown />
        </button>
        <button className="flex items-center gap-2 p-2">
          Past 30 Days <FaChevronDown />
        </button>
      </section>
      <Section2 />
      <Section3 />
    </section>
  );
}
