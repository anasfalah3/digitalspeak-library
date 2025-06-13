"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Logo from "@/public/logo-ds.png";
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiPieChart,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import clickFunnels from "@/public/click-funnels.svg";
import Systemeio from "@/public/Systemeio.png";
import Elementor from "@/public/Elementor.png";
import Link from "next/link";

export const ShiftingDropDown = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); //
  return (
    <div
      className={`flex ${
        isScrolled ? "nav shadow-md" : ""
      } fixed top-0 right-0 left-0 py-1 px-3 justify-around items-center z-50`}
    >
      <Link href="/">
        <div className="w-24 aspect-square">
          <Image
            src={Logo}
            alt=""
            width={1000}
            height={1000}
            className="h-full w-full object-contain"
          />
        </div>
      </Link>
      <Tabs />
    </div>
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [dir, setDir] = useState<null | "l" | "r">(null);

  const handleSetSelected = (val: number | null) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2"
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({
  children,
  tab,
  handleSetSelected,
  selected,
}: {
  children: ReactNode;
  tab: number;
  handleSetSelected: (val: number | null) => void;
  selected: number | null;
}) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
        selected === tab ? " bg-primary text-neutral-100" : "text-white"
      }`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const Content = ({
  selected,
  dir,
}: {
  selected: number | null;
  dir: null | "l" | "r";
}) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-[#9c4e19] bg-gradient-to-b from-[#c46527] via-[#c46527] to-primary p-4"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }: { selected: number | null }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    />
  );
};

const Products = () => {
  return (
    <div>
      <div className="flex gap-4">
        <div>
          <h3 className="mb-2 text-sm font-medium text-white underline">
            Sections
          </h3>
          <a href="/sections/faq" className="mb-1 block text-sm text-white">
            Faqs
          </a>
          <a href="/sections/testimonials" className="block text-sm text-white">
            Testimonials
          </a>
          <a href="/sections/timeline" className="block text-sm text-white">
            Timeline
          </a>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium text-white underline">
            Keyframes
          </h3>
          <a href="/keyframes" className="mb-1 block text-sm text-white">
            Images
          </a>
          <a href="/keyframes/text" className="mb-1 block text-sm text-white">
            Text
          </a>
          <a
            href="/keyframes/buttons"
            className="mb-1 block text-sm text-white"
          >
            Buttons
          </a>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium text-white underline">
            Components
          </h3>
          <a href="#" className="mb-1 block text-sm text-white">
            Accordion
          </a>
          <a href="#" className="mb-1 block text-sm text-white">
            Tabs
          </a>
          <a href="#" className="block text-sm text-white">
            Tables
          </a>
        </div>
      </div>

      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
        <FiArrowRight />
      </button>
    </div>
  );
};

const Platform = () => {
  return (
    <div className="grid grid-cols-3 gap-4 divide-x divide-neutral-700">
      <a
        href="/generator/clickfunnels"
        className="flex w-full flex-col items-center justify-center py-2 text-white transition-colors hover:text-neutral-50"
      >
        {/* <FiHome className="mb-2 text-xl text-white" /> */}
        <div className="w-6 h-6 aspect-square mb-2">
          <Image
            src={clickFunnels}
            alt="clickfunnels"
            width={300}
            height={300}
          />
        </div>
        <span className="text-xs">Clickfunnels</span>
      </a>
      <a
        href="/generator/systemio"
        className="flex w-full flex-col items-center justify-center py-2 text-white transition-colors hover:text-neutral-50"
      >
        {/* <FiBarChart2 className="mb-2 text-xl text-white" /> */}
        <div className="w-6 h-6 aspect-square mb-2">
          <Image src={Systemeio} alt="System.io" width={300} height={300} />
        </div>
        <span className="text-xs">System.io</span>
      </a>
      <a
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-white transition-colors hover:text-neutral-50"
      >
        {/* <FiPieChart className="mb-2 text-xl text-white" /> */}
        <div className="w-6 h-6 aspect-square mb-2">
          <Image src={Elementor} alt="Elemntor" width={300} height={300} />
        </div>
        <span className="text-xs">Elementor</span>
      </a>
    </div>
  );
};

const Blog = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <a href="#">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="/imgs/blog/4.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
          <p className="text-xs text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </a>
        <a href="#">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="/imgs/blog/5.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
          <p className="text-xs text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </a>
      </div>
      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
        <FiArrowRight />
      </button>
    </div>
  );
};

const TABS = [
  {
    title: "Generator",
    Component: Platform,
  },
  {
    title: "Helpers",
    Component: Products,
  },

  // {
  //   title: "Blog",
  //   Component: Blog,
  // },
].map((n, idx) => ({ ...n, id: idx + 1 }));
