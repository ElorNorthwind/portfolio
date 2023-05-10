import SectionWrapper from "@/shared/ui/SectionWrapper/SectionWrapper";
import mainview from "@/shared/assets/images/mainview.jpg";
import Image from "@/shared/ui/Image/Image";

export default function Section1() {
  return (
    <SectionWrapper>
      <div className="pt-5 h-full w-full flex">
        <div className="h-full flex flex-col grow">
          <h1 className="z-10 top-1/2 left-6 text-white text-8xl absolute">portfolio.</h1>
          <Image src={mainview} className="w-full h-full max-h-[85%] grow" />
          {/* <img src={mainview} className="z-1 w-full h-full max-h-[85%] object-cover grow" /> */}
          <div className="flex place-content-between p-6 text-2xl">
            <div>
              <p>Oleksii Kosolapenko</p>
              <p>3D Visuallization Specialist</p>
            </div>
            <div>
              <p>Select work:</p>
              <p>2020 - 2023</p>
            </div>
          </div>
        </div>
        <div className="px-3 basis-64">
          <h2 className="font-bold">A villa in Calabria</h2>
          <p>Corona Render, Forest pack</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
