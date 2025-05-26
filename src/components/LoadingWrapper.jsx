// components/LoadingWrapper.jsx
'use client';

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LoadingWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-darkg transition-opacity duration-500">
        <div className="w-16 h-16 bg-lightg rounded-full animate-ping"></div>
      </div>
    );
  }

  return (
    <div className="mt-14 bg-[url('/doodle2.png')] bg-contain bg-repeat bg-top min-h-screen h-full pb-4 transition-opacity duration-500">
      {children}
    </div>
  );
}
