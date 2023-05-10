import SectionWrapper from "@/shared/ui/SectionWrapper/SectionWrapper";
import aculco1 from "@/shared/assets/images/M_Aculco_in1_1.jpg";
import aculco2 from "@/shared/assets/images/M_Aculco_in2_1.jpg";
import Image from "@/shared/ui/Image/Image";

export default function Section14() {
  return (
    <SectionWrapper>
      <div className="h-full flex gap-8">
        <div className="h-full grow w-1/2 flex flex-col">
          <Image src={aculco1} className="h-[calc(60%-1rem)] w-full" />
        </div>
        <div className="h-full grow w-1/2 flex flex-col-reverse justify-between">
          <Image src={aculco2} className="h-[calc(60%-3rem)] w-full" />
          <div className="py-6">
            <h2 className="font-bold">A Retreat House near Mexico City</h2>
            <p>Corona render, Forest pack</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

// bg - [#d6d1ca];
