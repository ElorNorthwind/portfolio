import rug from "@/shared/assets/images/koghaug_rugHF.jpg";
import room from "@/shared/assets/images/koghaug_tvroom_final.jpg";
import Image from "@/shared/ui/Image/Image";

export default function Section5() {
  return (
    <>
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
      </div>
    </>
  );
}
