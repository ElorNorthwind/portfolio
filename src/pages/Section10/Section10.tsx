import cafe1 from "@/shared/assets/images/KClub_1HR.jpg";
import cafe2 from "@/shared/assets/images/KClub_2HR.jpg";
import Image from "@/shared/ui/Image/Image";

export default function Section10() {
  return (
    <>
      <div className="h-full flex">
        <div className="pt-8 py-8 ml-auto w-fit">
          <h2 className="font-bold">A Cafe in Phiiladelphia</h2>
          <p>Corona render</p>
        </div>
        <div className="h-full flex flex-col gap-8 p-8 items-end w-4/5 ">
          <Image src={cafe1} className="h-[calc(50%-1rem)] w-full" />
          <Image src={cafe2} className="h-[calc(50%-1rem)] w-full" />
        </div>
      </div>
    </>
  );
}
