import SectionWrapper from "@/shared/ui/SectionWrapper/SectionWrapper";
import visionSet from "@/shared/assets/images/Vinson_Set.jpg";

export default function Section3() {
  return (
    <SectionWrapper>
      <div className="h-full">
        <div className="py-8 h-5/6 flex flex-row gap-8">
          <img src={visionSet} className="z-1 h-full w-full object-cover" />
        </div>
        <div className="pl-8 pb-8">
          <h2 className="font-bold">A Living Room in Stockton</h2>
          <p>Corona rander</p>
        </div>
      </div>
    </SectionWrapper>
  );
}

// bg - [#d6d1ca];
