import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper(props: SectionWrapperProps) {
  const { children, className } = props;
  return (
    <div className={`h-screen w-full bg-stone-200 text-slate-600 snap-start snap-always overflow-hidden ${className}`}>
      {/* <div className=" relative max-w-7xl mx-auto h-full bg-stone-200">{children}</div> */}
      {children}
    </div>
  );
}
