"use client";
import { CiMedicalClipboard } from "react-icons/ci";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import toast from "react-hot-toast";
import { Input } from "../input";
import { Button } from "../button";
import { clickfunnelsStarter } from "@/utils/generatedCss";
type Font = {
  name: string;
  url: string;
};

const ProjectForm = () => {
  const [fonts, setFonts] = useState([{ name: "", url: "" }]);
  const [primaryColor, setPrimaryColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  const [primaryAccentColor, setPrimaryAccentColor] = useState("");
  const [secondaryAccentColor, setSecondaryAccentColor] = useState("");
  const [ctaIcon, setCtaIcon] = useState("");
  const [generatedCSS, setGeneratedCSS] = useState("");

  const handleFontChange = (
    index: number,
    field: keyof Font,
    value: string
  ) => {
    const newFonts = [...fonts];
    newFonts[index][field] = value;
    setFonts(newFonts);
  };

  const handleAddFont = () => {
    setFonts([...fonts, { name: "", url: "" }]);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let css = clickfunnelsStarter(
      fonts,
      primaryColor,
      secondaryColor,
      primaryAccentColor,
      secondaryAccentColor,
      ctaIcon
    );
    setGeneratedCSS(css);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedCSS);
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
    <div className="grid grid-cols-2 gap-8 w-full mt-6">
      <form onSubmit={handleSubmit}>
        <h2 className="pl-2 pr-4 pb-2">Fonts</h2>
        <div className="flex flex-col gap-1">
          {fonts.map((font, index) => (
            <div className="grid fonts-input gap-1 items-center" key={index}>
              <label>
                <Input
                  value={font.name}
                  onChange={(e) =>
                    handleFontChange(index, "name", e.target.value)
                  }
                  placeholder="Font Name"
                />
              </label>
              <label>
                <Input
                  value={font.url}
                  onChange={(e) =>
                    handleFontChange(index, "url", e.target.value)
                  }
                  placeholder="Font URL"
                />
              </label>
              <Button
                className="flex-grow-0"
                type="button"
                onClick={handleAddFont}
              >
                +
              </Button>
            </div>
          ))}
        </div>

        <h2 className="mt-4 pl-2 pr-4 pb-2">Colors</h2>
        <div className="grid grid-cols-2 gap-1">
          <label>
            <Input
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
              placeholder="Primary Color"
            />
          </label>
          <label>
            <Input
              value={secondaryColor}
              onChange={(e) => setSecondaryColor(e.target.value)}
              placeholder="Secondary Color"
            />
          </label>
          <label>
            <Input
              value={primaryAccentColor}
              onChange={(e) => setPrimaryAccentColor(e.target.value)}
              placeholder="Primary Accent Color"
            />
          </label>
          <label>
            <Input
              value={secondaryAccentColor}
              onChange={(e) => setSecondaryAccentColor(e.target.value)}
              placeholder="Secondary Accent Color"
            />
          </label>
        </div>

        <h2 className="mt-4 pl-2 pr-4 pb-2">CTA Icon</h2>
        <label>
          <Input
            value={ctaIcon}
            onChange={(e) => setCtaIcon(e.target.value)}
            placeholder="CTA Icon URL"
          />
        </label>

        <Button className="mt-4" type="submit">
          Generate CSS
        </Button>
      </form>
      <div>
        <div className="flex justify-between pl-2 pr-4 pb-2">
          <h2 className="">Generated CSS</h2>
          <button onClick={handleShareButtonClick} title="copy">
            <span className="text-2xl text-white">
              <CiMedicalClipboard />
            </span>
          </button>
        </div>

        <div className="mockup-code min-h-full max-h-96 overflow-y-auto">
          <pre data-prefix="$">
            <code>{generatedCSS}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
