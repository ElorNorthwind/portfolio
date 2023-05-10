import { Suspense, useCallback, useState } from "react";
import { Modal } from "../Modal/Modal";

interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function Image(props: ImageProps) {
  const { src, alt = "", className } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOpenModal = useCallback(() => {
    console.log("ping");
    setIsModalOpen(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <div className={`z-1 ${className}`}>
      <img src={src} alt={alt} className="object-cover  w-full h-full" onClick={onOpenModal} />
      <Modal isOpen={isModalOpen} onClose={onCloseModal} lazy>
        <Suspense fallback={<div>Loading...</div>}>
          <img src={src} alt={alt} className="max-h-[calc(100vh-3rem)] h-full w-full object-contain" />
        </Suspense>
      </Modal>
    </div>
  );
}

// import { Suspense } from "react";
// import { classNames } from "shared/lib/classNames/classNames";
// import { Loader } from "shared/ui/Loader/Loader";
// import { Modal } from "shared/ui/Modal/Modal";
// import { LoginFormAsync } from "../LoginForm/LoginForm.async";
// import cls from "./LoginModal.module.scss";

// interface LoginModalProps {
//   className?: string;
//   isOpen: boolean;
//   onClose: () => void;
// }

// export const LoginModal: React.FC<LoginModalProps> = (
//   props: LoginModalProps
// ) => {
//   const { className, isOpen, onClose } = props;

//   return (
//     <Modal
//       className={classNames(cls.loginModal, {}, [className])}
//       isOpen={isOpen}
//       onClose={onClose}
//       lazy
//     >
//       <Suspense fallback={<Loader />}>
//         <LoginFormAsync onSuccess={onClose} />
//       </Suspense>
//     </Modal>
//   );
// };
