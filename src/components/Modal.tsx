import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-gradient-to-br from-red-900/90 to-red-800/90 rounded-2xl p-6 max-w-lg w-full shadow-[0_0_30px_rgba(239,68,68,0.3)] animate-scale-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-red-500/20 transition-colors"
        >
          <X className="w-6 h-6 text-red-100" />
        </button>
        {children}
      </div>
    </div>
  );
}