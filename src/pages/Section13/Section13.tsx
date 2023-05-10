import SectionWrapper from "@/shared/ui/SectionWrapper/SectionWrapper";
import aculco from "@/shared/assets/images/M_Aculco_ex1_1.jpg";
import Image from "@/shared/ui/Image/Image";

export default function Section13() {
  return (
    <SectionWrapper>
      <div className="h-full flex flex-col gap-8 px-8">
        <Image src={aculco} className="h-5/6 w-full" />
        <div className="">
          <h2 className="font-bold">A Retreat House near Mexico City</h2>
          <p>Corona render, Forest pack</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
