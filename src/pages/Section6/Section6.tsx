import SectionWrapper from "@/shared/ui/SectionWrapper/SectionWrapper";
import complex from "@/shared/assets/images/Lviv_apbdg.jpg";
import Image from "@/shared/ui/Image/Image";

export default function Section6() {
  return (
    <SectionWrapper>
      <div className="h-full flex gap-8 p-8">
        <Image src={complex} className="h-full w-[calc(60%-3rem)]" />
        <div className="py-6">
          <h2 className="font-bold">An Apartment Complex in Lviv</h2>
          <p>Corona render, Forest Pack, Rail Clone</p>
        </div>
      </div>
    </SectionWrapper>
  );
}

// bg - [#d6d1ca];
