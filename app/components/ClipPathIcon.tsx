"use client";

import React from "react";
import { useAnimate } from "framer-motion";

export const ClipPath = ({ keyframe }: any) => {
  return (
    <div className=" pr-4 pb-12 w-full">
      <div className="mx-auto max-w-7xl">
        <ClipPathLinks keyframe={keyframe} />
      </div>
    </div>
  );
};

const ClipPathLinks = ({ keyframe }: any) => {
  return (
    <div className="divide-y divide-neutral-900 border border-neutral-900 bg-[#292929]">
      {keyframe ? (
        <div className="grid grid-cols-3 divide-x divide-neutral-900 ">
          <LinkBox Icon={"Images"} href="/keyframes" />

          <LinkBox Icon={"Text"} href="/keyframes/text" />
          <LinkBox Icon={"Button"} href="/keyframes/buttons" />
        </div>
      ) : (
        <div className="grid grid-cols-3 divide-x divide-neutral-900 ">
          <LinkBox Icon={"Faqs"} href="/sections/faq" />

          <LinkBox Icon={"Testimonials"} href="/sections/testimonials" />
          <LinkBox Icon={"Timeline"} href="/sections/timeline" />
        </div>
      )}
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES: any = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: any = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href }: any) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: any) => {
    const box = e.target.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left",
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right",
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top",
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom",
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: any) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e: any) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <a
      href={href}
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
    >
      <Icon className="text-xl sm:text-3xl md:text-4xl" />
      <h4 className="uppercase text-2xl">{Icon}</h4>

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 grid place-content-center bg-neutral-900 text-white"
      >
        <h4 className="uppercase text-2xl  text-white">{Icon}</h4>
      </div>
    </a>
  );
};
