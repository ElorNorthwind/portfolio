import SectionWrapper from "@/shared/ui/SectionWrapper/SectionWrapper";
import visionSet from "@/shared/assets/images/Vinson_Set.jpg";
import ColorBox from "@/shared/ui/ColorBox/ColorBox";

export default function Section3() {
  return (
    <SectionWrapper>
      <div className="h-full">
        <div className="py-8 h-2/3 flex flex-row gap-8">
          <img src={visionSet} className="z-1 h-full w-full object-cover" />
        </div>
        <div className="pl-8 pb-8">
          <h2 className="font-bold">A kitchen in London</h2>
          <p>V-Ray rander</p>
        </div>
        <div className="bg-red-200 h-2 flex w-[calc(70%-1rem)]">
          <ColorBox name="Timberwolf" color="bg-[#d6d1ca]" />
          <ColorBox name="Gunmetal" color="bg-[#2a3236]" black={false} />
          <ColorBox name="Dim gray" color="bg-[#7c7162]" black={false} />
          <ColorBox name="Charcoal" color="bg-[#404d56]" black={false} />
          <ColorBox name="Jet" color="bg-[#363634]" black={false} />
        </div>
      </div>
    </SectionWrapper>
  );
}

// bg - [#d6d1ca];
