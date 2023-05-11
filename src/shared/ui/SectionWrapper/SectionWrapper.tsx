import { ReactNode, forwardRef } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

const SectionWrapper = forwardRef<HTMLDivElement, SectionWrapperProps>(function SectionWrapper(props, ref) {
  const { children, className } = props;
  return (
    <div
      ref={ref}
      className={`relative h-screen w-full  text-slate-600 snap-start snap-always overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
});

export default SectionWrapper;
