"use client";

import Image from "next/image";
import Template from "@/public/template.png";
import toast from "react-hot-toast";
import { Button } from "@/app/components/button";

const Card = ({ keyframe, name, type, content, className }: any) => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`animation: ${keyframe};`);
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

  const copyKeyframe = () => {
    copyToClipboard();
  };

  // Render content based on type
  const renderContent = () => {
    switch (type) {
      case "image":
        return (
          <div
            style={{
              animation: keyframe,
            }}
            className="w-28 aspect-square "
          >
            <Image
              src={Template}
              alt=""
              width={1000}
              height={1000}
              className="h-full w-full object-contain"
            />
          </div>
        );
      case "text":
        return (
          <h3
            style={{
              animation: keyframe,
            }}
            className="text-6xl text-white font-bold uppercase text-center"
          >
            {content || "Digital speak"}
          </h3>
        );
      case "button":
        return (
          <Button

            style={{
              animation: keyframe,
            }}
            className={`bg-[#27024B] text-white border px-10 py-6 uppercase border-[#444] hover:bg-[#0e011c] transition`}
          >
            {content || name || "Animated Button"}
          </Button>
        );
      default:
        return (
          <div
            style={{
              animation: keyframe,
            }}
            className="text-white text-center"
          >
            {content || "No preview available"}
          </div>
        );
    }
  };

  return (
    <article
      onClick={copyKeyframe}
      className="p-4 border rounded-lg cursor-pointer"
    >
      <div className="flex justify-center items-center bg-[#242424] p-10 rounded-lg overflow-hidden">
        {renderContent()}
      </div>

      <div className="mt-2">
        <h3 className="font-semibold">{name}</h3>
      </div>
    </article>
  );
};

export default Card;
