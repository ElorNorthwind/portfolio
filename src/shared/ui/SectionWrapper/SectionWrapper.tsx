import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper(props: SectionWrapperProps) {
  const { children, className } = props;
  return (
    <div className={`relative h-screen w-full  text-slate-600 snap-start snap-always overflow-hidden ${className}`}>
      {/* <div className="relative max-w-7xl mx-auto h-full bg-[#f7f7f0] shadow-2xl">{children}</div> */}
      {children}
    </div>
  );
}
