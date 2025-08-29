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
  }, 
    {
    name: "Button 2",
    keyframes: "btnPulse 1.5s infinite ease-in-out",
    type: "button",
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
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Page;
