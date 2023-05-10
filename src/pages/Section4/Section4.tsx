import SectionWrapper from "@/shared/ui/SectionWrapper/SectionWrapper";
import remmehuse from "@/shared/assets/images/Remmehuse.jpg";

export default function Section4() {
  return (
    <SectionWrapper>
      <div className="h-full">
        <div className="py-8 h-5/6 flex flex-row gap-8 px-6">
          <img src={remmehuse} className="z-1 h-full w-full object-cover" />
        </div>
        <div className="pl-8 pb-8">
          <h2 className="font-bold">Residential Area near Skærbæk</h2>
          <p>Corona render, Forest Pack, Rail Clone</p>
        </div>
      </div>
    </SectionWrapper>
  );
}

// bg - [#d6d1ca];
