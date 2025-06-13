"use client";

import Image from "next/image";
import Template from "@/public/template.png";
import toast from "react-hot-toast";

const Card = ({ keyframe, name, type }: any) => {
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

  return (
    <article
      onClick={copyKeyframe}
      className="p-4 border rounded-lg cursor-pointer"
    >
      <div className="flex justify-center items-center bg-[#242424] p-10 rounded-lg overflow-hidden">
        {type === "image" ? (
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
        ) : (
          <h3
            style={{
              animation: keyframe,
            }}
            className="text-6xl text-white font-bold uppercase text-center"
          >
            Digital speak
          </h3>
        )}
      </div>

      <div className="mt-2">
        <h3 className="font-semibold">{name}</h3>
        {/* <p className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing
        </p> */}
      </div>
    </article>
  );
};

export default Card;
