"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg">
      <p>Diese Website verwendet Cookies, um dein Erlebnis zu verbessern.</p>
      <div className="flex gap-2">
        <button
          onClick={accept}
          className="bg-green-500 px-3 py-1 rounded text-white"
        >
          Akzeptieren
        </button>
        <button
          onClick={decline}
          className="bg-red-500 px-3 py-1 rounded text-white"
        >
          Ablehnen
        </button>
      </div>
    </div>
  );
}
