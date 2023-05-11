interface NavbarProps {
  refs: (HTMLDivElement | null)[];
  active?: React.Key | null | undefined;
}
export default function Navbar(props: NavbarProps) {
  const { refs, active } = props;

  return (
    <div className={`fixed left-3 top-1/2 -translate-y-1/2 gap-3 flex flex-col`}>
      {refs.length > 0 &&
        refs.map((ref, id) => (
          <div
            className={`rotate-45  bg-opacity-20 h-3 w-3 cursor-pointer hover:bg-opacity-30 ${
              id === active ? "bg-black" : "bg-stone-500"
            }`}
            onClick={() => ref?.scrollIntoView({ behavior: "smooth" })}
          ></div>
        ))}
    </div>
  );
}
