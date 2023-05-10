import SectionWrapper from "@/shared/ui/SectionWrapper/SectionWrapper";
import aculco from "@/shared/assets/images/M_Aculco_ex2_1.jpg";
import Image from "@/shared/ui/Image/Image";

export default function Section15() {
  return (
    <SectionWrapper>
      <div className="h-full flex flex-col gap-8 px-8 pt-8">
        <div className="">
          <h2 className="font-bold">A Retreat House near Mexico City</h2>
          <p>Corona render, Forest pack</p>
        </div>
        <Image src={aculco} className="h-full w-full" />
      </div>
    </SectionWrapper>
  );
}
