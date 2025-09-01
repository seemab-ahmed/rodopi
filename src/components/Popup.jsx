"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("popupAccepted");
    if (!accepted) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("popupAccepted", "true");
    setShowPopup(false);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          className="fixed inset-0 flex items-end justify-center bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-xl w-full text-left"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {/* Logo */}
            <div className="mb-4">
              <img
                src="/images/rodopi_logo.png"
                alt="eRecht24 Logo"
                className="h-6 mb-2"
              />
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold mb-3">
              Privatsphäre-Einstellungen
            </h2>

            {/* Text */}
            <p className="text-gray-700 text-sm mb-4">
              Diese Seite nutzt einwilligungsbedürftige Cookies und Technologien
              von Drittunternehmen zur Integration bestimmter Funktionen. Wenn
              Sie auf den Button <strong>"Alles akzeptieren"</strong> klicken,
              werden diese Funktionen aktiviert (Einwilligung). Nach der
              Einwilligung verarbeiten wir und die betroffenen Drittunternehmen
              Ihre personenbezogenen Daten für verschiedene Zwecke. Detaillierte
              Informationen zu Zweck, Rechtsgrundlagen, Drittunternehmen können
              Sie unter dem Button <strong>"Mehr"</strong> und in unserer
              Datenschutzerklärung einsehen. Sie können Ihre Einwilligung
              jederzeit widerrufen.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 py-3 bg-gray-800 text-white font-semibold rounded hover:bg-gray-700"
              >
                Accept
              </button>
              <button
                onClick={handleCancel}
                className="flex-1 py-3 bg-gray-800 text-white font-semibold rounded hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>

            {/* Footer */}
            <p className="text-xs text-gray-500 mt-4">
              Powered by Usercentrics Consent Management & eRecht24
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
