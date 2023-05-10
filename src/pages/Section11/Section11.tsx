import SectionWrapper from "@/shared/ui/SectionWrapper/SectionWrapper";
import day from "@/shared/assets/images/PP_Day_1.jpg";
import night from "@/shared/assets/images/PP_Night_1.jpg";
import Image from "@/shared/ui/Image/Image";

export default function Section11() {
  return (
    <SectionWrapper>
      <div className="h-full flex flex-col px-10 gap-8">
        <Image src={night} className="h-2/3 w-full" />
        <div className="h-1/3 w-full flex">
          <div className="w-1/2">
            <h2 className="font-bold">A Gentlemen's Club in Miami</h2>
            <p>Corona render, Forest Pack</p>
          </div>
          <Image src={day} className="h-full w-1/2" />
        </div>
      </div>
    </SectionWrapper>
  );
}
