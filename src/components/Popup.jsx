"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

const COOKIE_CATEGORIES = [
  { key: "necessary", label: "Strictly Necessary", required: true },
  { key: "analytics", label: "Analytics", required: false },
  { key: "marketing", label: "Marketing", required: false },
];

export default function Popup() {
  const [showPopup, setShowPopup] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [choices, setChoices] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });
  const t = useTranslations("privacyPopup");

  useEffect(() => {
    const consent = localStorage.getItem("privacyConsent");
    if (!consent) setShowPopup(true);
  }, []);

  const handleAcceptAll = () => {
    const newChoices = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setChoices(newChoices);
    saveConsent(newChoices);
    setShowPopup(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const newChoices = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setChoices(newChoices);
    saveConsent(newChoices);
    setShowPopup(false);
    setShowSettings(false);
  };

  const handleSaveSettings = () => {
    saveConsent(choices);
    setShowPopup(false);
    setShowSettings(false);
  };

  const saveConsent = (choices) => {
    localStorage.setItem(
      "privacyConsent",
      JSON.stringify({
        ...choices,
        timestamp: new Date().toISOString(),
      })
    );
  };

  // Persistent privacy settings link (add to your footer/layout as well)
  useEffect(() => {
    window.openPrivacySettings = () => {
      setShowPopup(true);
      setShowSettings(true);
    };
  }, []);

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
            <div className="mb-4 flex justify-center">
              <img
                src="/images/rodopi_logo.png"
                alt="Rodopi Logo"
                className="h-6 mb-2"
              />
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold mb-3">{t("title")}</h2>

            {/* Text */}
            <p className="text-gray-700 text-sm mb-4">{t("description")}</p>

            {/* Buttons */}
            {!showSettings ? (
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 py-3 bg-[#8CC43f] text-white font-semibold rounded hover:bg-[#6ea32e] cursor-pointer"
                >
                  {t("acceptAll")}
                </button>
                <button
                  onClick={handleRejectAll}
                  className="flex-1 py-3 bg-gray-800 text-white font-semibold rounded hover:bg-gray-700 cursor-pointer"
                >
                  {t("rejectAll")}
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex-1 py-3 bg-white text-[#8CC43f] border border-[#8CC43f] font-semibold rounded hover:bg-green-50 cursor-pointer"
                >
                  {t("manageSettings")}
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-md font-semibold mb-2">
                  {t("settingsTitle") || "Cookie Settings"}
                </h3>
                <form>
                  {COOKIE_CATEGORIES.map((cat) => (
                    <label key={cat.key} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        checked={choices[cat.key]}
                        disabled={cat.required}
                        onChange={() =>
                          setChoices((prev) => ({
                            ...prev,
                            [cat.key]: !prev[cat.key],
                          }))
                        }
                        className="mr-2"
                      />
                      <span>
                        {t(cat.key) || cat.label}
                        {cat.required && (
                          <span className="text-xs text-gray-400 ml-1">
                            {t('requiredLabel')}
                          </span>
                        )}
                      </span>
                    </label>
                  ))}
                </form>
                <div className="flex gap-3 mt-4">
                  <button
                    type="button"
                    onClick={handleSaveSettings}
                    className="flex-1 py-3 bg-[#8CC43f] text-white font-semibold rounded hover:bg-[#6ea32e] cursor-pointer"
                  >
                    {t("saveSettings") || "Save"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowSettings(false)}
                    className="flex-1 py-3 bg-gray-800 text-white font-semibold rounded hover:bg-gray-700 cursor-pointer"
                  >
                    {t("back") || "Back"}
                  </button>
                </div>
              </div>
            )}

            {/* Footer */}
            <p className="text-xs text-gray-500 mt-4 flex justify-center">
              {t("footer")}
            </p>
            <div className="flex gap-4 mt-2 justify-center">
              <a
                href="/legalNotice"
                className="text-xs text-[#8CC43f] underline hover:text-[#6ea32e] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("legalNotice")}
              </a>
              <a
                href="/privacyPolicy"
                className="text-xs text-[#8CC43f] underline hover:text-[#6ea32e] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("privacyPolicy")}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
