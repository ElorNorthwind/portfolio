import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { Portal } from "../Portal/Portal";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props;

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  //     const contentClickHandler = (e: React.MouseEvent): void => {
  //   e.stopPropagation();
  //     };

  const contentClickHandler = (): void => {
    //   e.stopPropagation();
  };
  const onKeydown = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeydown);
    }
    return () => {
      window.removeEventListener("keydown", onKeydown);
    };
  }, [isOpen, onKeydown]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={`bg-black flex align-middle justify-center bg-opacity-60 inset-0 ${isOpen ? "fixed" : "hidden"}`}
        onClick={closeHandler}
      >
        <div className={`my-auto mx-6 ${className}`} onClick={contentClickHandler}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
