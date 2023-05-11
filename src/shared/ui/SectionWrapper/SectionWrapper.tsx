import { ReactNode, forwardRef, useEffect, useRef } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  key?: React.Key | null | undefined;
  onObserved?: () => void;
}

const SectionWrapper = forwardRef<HTMLDivElement, SectionWrapperProps>(function SectionWrapper(props, ref) {
  const { children, className, key, onObserved } = props;
  const myRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const options = {
      root: null, //document.querySelector("#wrapper"),
      rootMargin: "0px",
      threshold: 0.3,
    };
    const element = myRef.current;

    observer = new IntersectionObserver(([entry]) => {
      if (onObserved && entry.isIntersecting) {
        onObserved();
      }
    }, options);

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (observer && element) {
        observer.unobserve(element);
      }
    };
  }, [ref, key, onObserved]);

  return (
    <div
      ref={(node) => {
        myRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      }}
      className={`relative h-screen w-full  text-slate-600 snap-start snap-always overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
});

export default SectionWrapper;
