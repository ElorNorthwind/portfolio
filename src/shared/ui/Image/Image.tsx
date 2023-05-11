import { Suspense, useCallback, useState, useEffect, useRef } from "react";
import { Modal } from "../Modal/Modal";

interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function Image(props: ImageProps) {
  const { src, alt = "", className } = props;
  const imgRef = useRef(null);
  const [isShownd, setIsShown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOpenModal = useCallback(() => {
    console.log("ping");
    setIsModalOpen(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const options = {
      root: null, //document.querySelector("#wrapper"),
      rootMargin: "0px",
      threshold: 0.3,
    };
    const element = imgRef.current;

    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsShown(true);
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
  }, []);

  return (
    <div className={`z-1 overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        ref={imgRef}
        className={`object-cover hover:scale-105 duration-500 transition-all w-full h-full cursor-pointer ${
          isShownd ? "opacity-100" : "opacity-0"
        }`}
        onClick={onOpenModal}
      />
      <Modal isOpen={isModalOpen} onClose={onCloseModal} lazy>
        <Suspense fallback={<div>Loading...</div>}>
          <img src={src} alt={alt} className="max-h-[calc(100vh-3rem)] h-full w-full object-contain" />
        </Suspense>
      </Modal>
    </div>
  );
}
// export function useInfiniteScroll({ callback, triggerRef, wrapperRef }: UseInfiniteScrollOptions) {
//     useEffect(() => {
//       let observer: IntersectionObserver | null = null;
//       const wrapperElement = wrapperRef.current;
//       const triggerElement = triggerRef.current;

//       if (callback) {
//         const options = {
//           root: wrapperElement,
//           rootMargin: "0px",
//           threshold: 0,
//         };

//         observer = new IntersectionObserver(([entry]) => {
//           if (entry.isIntersecting) {
//             console.log("observed");
//             callback();
//           }
//         }, options);

//         observer.observe(triggerElement);
//       }
//       return () => {
//         if (observer) {
//           observer.unobserve(triggerElement);
//         }
//       };
//     }, [callback, triggerRef, wrapperRef]);
//   }
