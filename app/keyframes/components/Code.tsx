"use client";

import { CiMedicalClipboard } from "react-icons/ci";
import toast from "react-hot-toast";

const Code = () => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(
        `@import "https://cdn.digital-speak.com/Customization/Animation/keyframes.css";`
      );
      toast.success("CSS copied to clipboard!", {
        style: {
          borderRadius: "10px",
          background: "#242424",
          color: "#fff",
        },
      });
    } catch (err) {
      console.error("Failed to copy to clipboard", err);
    }
  };

  const handleShareButtonClick = () => {
    copyToClipboard();
  };

  return (
    <div className="mx-auto my-3">
      <div className="flex justify-between pl-2 pr-4 pb-2">
        <h2 className="mb-2 text-lg text-white">
          Make sure you import css in your project
        </h2>
        <button onClick={copyToClipboard} title="copy">
          <span className="text-2xl text-white">
            <CiMedicalClipboard />
          </span>
        </button>
      </div>
      <div className="mockup-code min-h-full max-h-96 overflow-y-auto">
        <pre data-prefix="$">
          <code>
            {`@import "https://cdn.digital-speak.com/Customization/Animation/keyframes.css";`}
          </code>
        </pre>
      </div>
    </div>
  );
};
export default Code;
