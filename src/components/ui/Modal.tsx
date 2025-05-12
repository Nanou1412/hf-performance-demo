import { ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  title?: string;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, title, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-neutral-900 border border-neutral-700 rounded-lg w-full max-w-lg p-6 relative text-white">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
        >
          <X size={20} />
        </button>

        {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}

        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
