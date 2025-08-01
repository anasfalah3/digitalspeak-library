"use client";
import React, { useState } from "react";
import Card from "../components/Card";
import "../keyframes.css";
import Code from "../components/Code";

const keyframes = [
  {
    name: "Button 1",
    keyframes: "neon1 1.5s ease-in-out infinite alternate",
    type: "button",
    content: "Click Me",
    className: "neon-button",
    css: `.neon-button {
  animation: neon1 1.5s ease-in-out infinite alternate; 
  }`,
  }, 
];

const Page = () => {
  const [openIndexes, setOpenIndexes] = useState<{ [key: number]: boolean }>(
    {}
  );

  const toggle = (idx: number) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto">
        <Code />

        <div className="w-full my-6 h-[1px] bg-divider"></div>

        <div className="mt-3">
          <h2 className="mb-2 text-lg text-white">
            Then click on the animation to copy css prop
          </h2>
          <div className="grid grid-cols-3 w-full gap-3">
            {keyframes.map((keyframe, index) => (
              <div key={keyframe.name}>
                <Card
                  name={keyframe.name}
                  keyframe={keyframe.keyframes}
                  type={keyframe.type}
                  content={keyframe.content}
                  className={keyframe.className}
                />
                <button
                  className="mt-2 mb-1 px-3 py-1 rounded bg-[#222] text-xs text-white border border-[#444] hover:bg-[#333] transition"
                  onClick={() => toggle(index)}
                >
                  {openIndexes[index] ? "Hide CSS" : "Show CSS"}
                </button>
                {openIndexes[index] && (
                  <pre className="bg-[#181818] text-green-400 text-xs p-2 rounded mt-2 overflow-x-auto">
                    <code>{keyframe.css}</code>
                  </pre>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Page;
