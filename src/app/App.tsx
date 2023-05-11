import Section1 from "@/pages/Section1/Section1";
import Section10 from "@/pages/Section10/Section10";
import Section11 from "@/pages/Section11/Section11";
import Section12 from "@/pages/Section12/Section12";
import Section13 from "@/pages/Section13/Section13";
import Section14 from "@/pages/Section14/Section14";
import Section15 from "@/pages/Section15/Section15";
import Section2 from "@/pages/Section2/Section2";
import Section3 from "@/pages/Section3/Section3";
import Section4 from "@/pages/Section4/Section4";
import Section5 from "@/pages/Section5/Section5";
import Section6 from "@/pages/Section6/Section6";
import Section7 from "@/pages/Section7/Section7";
import Section8 from "@/pages/Section8/Section8";
import Section9 from "@/pages/Section9/Section9";
import SectionWrapper from "@/shared/ui/SectionWrapper/SectionWrapper";
import Navbar from "@/widgets/Navbar/Navbar";
import { useRef } from "react";

function App() {
  const sections = [
    <Section1 />,
    <Section2 />,
    <Section3 />,
    <Section4 />,
    <Section5 />,
    <Section6 />,
    <Section7 />,
    <Section8 />,
    <Section9 />,
    <Section10 />,
    <Section11 />,
    <Section12 />,
    <Section13 />,
    <Section14 />,
    <Section15 />,
  ];
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div id="wrapper" className="relative max-w-7xl mx-auto h-full bg-[#f7f7f0] shadow-2xl">
      {sections.map((section, id) => (
        <SectionWrapper key={id} ref={(el: HTMLDivElement) => (sectionRefs.current[id] = el)}>
          {section}
        </SectionWrapper>
      ))}
      <Navbar refs={sectionRefs} />
    </div>
  );
}

export default App;
