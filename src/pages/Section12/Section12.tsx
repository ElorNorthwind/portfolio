import yacht from "@/shared/assets/images/Yacht.jpg";
import Image from "@/shared/ui/Image/Image";

export default function Section12() {
  return (
    <>
      <div className="h-full flex flex-col gap-8 p-8 justify-center">
        <Image src={yacht} className="min-h-1/2 w-full" />
        <div className="">
          <h2 className="font-bold">A Yacht Club Guesthouse in Hawaii</h2>
          <p>V-Ray renderer</p>
        </div>
      </div>
    </>
  );
}
