interface ColorBoxProps {
  name: string;
  color: string;
  black?: boolean;
}

export default function ColorBox(props: ColorBoxProps) {
  const { name, color, black = true } = props;
  return (
    <div className={`p-3 h-32 w-full ${color} flex flex-col justify-end`}>
      <h2 className={`text-xl uppercase text-center font-bold mb-1 ${black ? "text-black" : "text-white"}`}>
        {color.match(/bg-\[#(.*)\]/)?.[1]}
      </h2>
      <p className={`text-xs text-center ${black ? "text-black" : "text-white"}`}>{name}</p>
    </div>
  );
}
// bg-[#d6d1ca]
