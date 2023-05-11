import bathroom1 from "@/shared/assets/images/HInn_Room8_Bath_1_1.jpg";
import bathroom2 from "@/shared/assets/images/HInn_Room8_Bath_2.jpeg";
import Image from "@/shared/ui/Image/Image";

export default function Section7() {
  return (
    <>
      <div className="h-full flex flex-col gap-8 px-8 justify-between">
        <Image src={bathroom1} className="min-h-[calc(40vh-3rem)] w-full" />
        <div className="py-0 flex justify-between">
          <h2 className="font-bold">A Hotel Suite in Hong Kong</h2>
          <p>Corona render</p>
        </div>
        <Image src={bathroom2} className="min-h-[calc(40vh-3rem)] w-full" />
      </div>
    </>
  );
}
