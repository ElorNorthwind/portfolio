import garage from "@/shared/assets/images/Garage_1_draft.jpg";
import Image from "@/shared/ui/Image/Image";

export default function Section8() {
  return (
    <>
      <div className="h-full flex flex-col gap-8 p-8 justify-center">
        <Image src={garage} className="min-h-1/2 w-full" />
        <div className="">
          <h2 className="font-bold">A Garage near Malmö</h2>
          <p>Corona render, Forest Pack</p>
        </div>
      </div>
    </>
  );
}
