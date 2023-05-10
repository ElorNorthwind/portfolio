import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper(props: SectionWrapperProps) {
  const { children, className } = props;
  return (
    <div className={`relative h-screen w-full bg-stone-200 text-slate-600 snap-start snap-always ${className}`}>
      {children}
    </div>
  );
}
