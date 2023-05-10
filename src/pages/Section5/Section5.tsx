import SectionWrapper from "@/shared/ui/SectionWrapper/SectionWrapper";
import rug from "@/shared/assets/images/koghaug_rugHF.jpg";
import room from "@/shared/assets/images/koghaug_tvroom_final.jpg";
import Image from "@/shared/ui/Image/Image";

export default function Section5() {
  return (
    <SectionWrapper>
      <div className="h-full flex gap-8 p-8">
        <div className="h-full grow w-[calc(70%-3rem)] flex flex-col">
          <Image src={room} className="h-[calc(60%-1rem)] w-full" />
          <div className="py-6">
            <h2 className="font-bold">A TV Room in Göteborg</h2>
            <p>Corona render</p>
          </div>
        </div>
        <div className="h-full grow flex flex-col-reverse items-end">
          <Image src={rug} className="h-[calc(40%-3rem)] w-full" />
          <div className="py-6">
            <h2 className="font-bold">Carpet detail</h2>
          </div>
        </div>
        {/* <div className="py-8 h-full flex flex-col gap-8 px-6">
          <img src={room} className="z-1 h-full w-full object-cover" />
        </div>
        <div className="pl-8 pb-8">
          <h2 className="font-bold">Residential Area near Skærbæk</h2>
          <p>Corona render, Forest Pack, Rail Clone</p>
        </div> */}
      </div>
    </SectionWrapper>
  );
}

// bg - [#d6d1ca];
