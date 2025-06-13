"use client";

import Section, {
  SectionWithComponent,
  SectionFaq,
} from "./components/Section";
import { faqs } from "@/utils/faqs";
import { testimonials } from "@/utils/testimonials";
import { timelines } from "@/utils/Timelines";

import { useEffect, useState } from "react";

const SectionPage = ({ params }: any) => {
  const [pageName, setPageName] = useState("");
  useEffect(() => {
    if (params.name === "faq") {
      setPageName("LES FAQS");
    } else if (params.name === "testimonials") {
      setPageName("Testimonials");
    } else if (params.name === "timeline") {
      setPageName("Timeline");
    }
  }, [params.name]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 mt-12">
      <div className="container mx-auto">
        <h2 className="mb-6 text-5xl text-white font-bold uppercase">
          {pageName}
        </h2>
        {params.name === "faq" ? (
          <div className="grid grid-cols-3 w-full gap-3">
            {faqs?.map((item) => (
              <SectionFaq
                key={item.name}
                name={item.name}
                html={item.html}
                css={item.css}
                js={item.js}
                image={item.image}
              />
            ))}
          </div>
        ) : params.name === "testimonials" ? (
          <div className="grid grid-cols-3 w-full gap-3">
            {testimonials?.map((item) => (
              <Section
                key={item.name}
                name={item.name}
                html={item.html}
                css={item.css}
                js={item.js}
                image={item.image}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 w-full gap-6">
            {timelines?.map((item) => (
              <SectionWithComponent
                key={item.name}
                name={item.name}
                html={item.html}
                css={item.css}
                Component={() => item.Component}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};
export default SectionPage;
