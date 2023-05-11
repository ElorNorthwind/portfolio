import remmehuse from "@/shared/assets/images/Remmehuse.jpg";
import Image from "@/shared/ui/Image/Image";

export default function Section4() {
  return (
    <>
      <div className="h-full">
        <div className="py-8 h-5/6 flex flex-row gap-8 px-6">
          <Image src={remmehuse} className="h-full w-full" />
        </div>
        <div className="pl-8 pb-8">
          <h2 className="font-bold">Residential Area near Skærbæk</h2>
          <p>Corona render, Forest Pack, Rail Clone</p>
        </div>
      </div>
    </>
  );
}

// bg - [#d6d1ca];
