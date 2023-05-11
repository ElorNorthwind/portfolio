import { MutableRefObject } from "react";

interface NavbarProps {
  refs: (HTMLDivElement | null)[];
}
export default function Navbar(props: NavbarProps) {
  const { refs } = props;

  //   if (!refs?.current) {
  //     return null;
  //   }

  return (
    <div className={`fixed left-3 top-1/2 -translate-y-1/2 gap-2 flex flex-col`}>
      {refs.length > 0 &&
        refs.map((ref) => (
          <div
            className={`rounded-full bg-black bg-opacity-20 h-3 w-3 cursor-pointer hover:bg-opacity-30`}
            onClick={() => ref?.scrollIntoView({ behavior: "smooth" })}
          ></div>
        ))}
    </div>
  );
}
