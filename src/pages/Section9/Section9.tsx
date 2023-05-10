import SectionWrapper from "@/shared/ui/SectionWrapper/SectionWrapper";
import future1 from "@/shared/assets/images/future1.jpg";
import future2 from "@/shared/assets/images/future2.jpg";
import future3 from "@/shared/assets/images/future3.jpg";
import stol from "@/shared/assets/images/stol.jpg";
import Image from "@/shared/ui/Image/Image";

export default function Section9() {
  return (
    <SectionWrapper>
      <div className="h-full flex flex-col gap-8 p-8">
        <div className="h-1/2 gap-8 flex">
          <Image src={future3} className="h-full w-3/5" />
          <Image src={stol} className="h-full  w-2/5" />
        </div>
        <div className="grow h-[calc(50%-6rem)] gap-8 flex items-end">
          <Image src={future2} className="h-full w-2/5" />
          <div className="w-3/5 h-full flex flex-col">
            <div className="mb-8">
              <h2 className="font-bold">Furniture Shots</h2>
              <p>Corona render, V-Ray render</p>
            </div>
            <Image src={future1} className="h-full w-full" />
            Section9 copy{" "}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
