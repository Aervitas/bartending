"use client";

import { useEffect, useState } from "react";

export default function CinematicTransition() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 3000); // animation duration of 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
        {/* Gray overlay that fades out */}
        <div className="absolute inset-0 bg-gray-500 animate-fadeOut"></div>
        {/* Ribbon element that slides out */}
        <div className="relative">
          <div className="bg-red-600 text-white px-8 py-4 animate-cut">
            Cutting...
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        .animate-fadeOut {
          animation: fadeOut 3s forwards;
        }
        @keyframes cut {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }
        .animate-cut {
          animation: cut 3s forwards;
        }
      `}</style>
    </>
  );
}