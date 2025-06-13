"use client";

import { Button } from "@/app/components/button";
import { Input } from "@/app/components/input";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { CiMedicalClipboard } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";

const Section = ({ image, name, html, js, css }: any) => {
  const showModel = () => {
    const modal = document.getElementById(
      `my_modal_${name}`
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    } else {
      console.error("modal not found.", `my_modal_1 Modify`);
    }
  };

  const copyHTMLToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(html);
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
  const copyCSSToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(css);
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
  const copyJSToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(js);
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

  return (
    <>
      <div
        onClick={showModel}
        className="flex cursor-pointer justify-center items-center bg-[#242424] p-6 rounded-lg overflow-hidden"
      >
        <div className="w-96 aspect-square rounded-xl">
          <Image
            src={image}
            alt=""
            width={2000}
            height={2000}
            className="h-full w-full  rounded-md"
          />
        </div>
      </div>
      <dialog id={`my_modal_${name}`} className="modal">
        <div className="modal-box code-modal-box">
          <div className="grid grid-cols-3 w-full gap-3 mt-12">
            <div>
              <div className="flex justify-between pl-2 pr-4 pb-2">
                <h4 className="">HTML</h4>
                <button onClick={copyHTMLToClipboard} title="copy">
                  <span className="text-2xl text-white">
                    <CiMedicalClipboard />
                  </span>
                </button>
              </div>
              <div className="mockup-code min-h-full max-h-[60vh] overflow-y-auto">
                <pre data-prefix="$">
                  <code>{html}</code>
                </pre>
              </div>
            </div>
            <div>
              <div className="flex justify-between pl-2 pr-4 pb-2">
                <h4 className="">CSS</h4>
                <button onClick={copyCSSToClipboard} title="copy">
                  <span className="text-2xl text-white">
                    <CiMedicalClipboard />
                  </span>
                </button>
              </div>
              <div className="mockup-code min-h-full max-h-[60vh] overflow-y-auto">
                <pre data-prefix="$">
                  <code>{css}</code>
                </pre>
              </div>
            </div>
            <div>
              <div className="flex justify-between pl-2 pr-4 pb-2">
                <h4 className="">JS</h4>
                <button onClick={copyJSToClipboard} title="copy">
                  <span className="text-2xl text-white">
                    <CiMedicalClipboard />
                  </span>
                </button>
              </div>
              <div className="mockup-code min-h-full max-h-[60vh] overflow-y-auto">
                <pre data-prefix="$">
                  <code>{js}</code>
                </pre>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <Button className="absolute top-2 right-2">
                <span className="text-xl text-white">
                  <MdOutlineClose />
                </span>
              </Button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
export default Section;

export const SectionWithComponent = ({
  Component,
  name,
  html,
  js,
  css,
}: {
  Component: () => JSX.Element;
  name: string;
  html: string;
  js?: string;
  css: string;
}) => {
  const showModel = () => {
    const modal = document.getElementById(
      `my_modal_${name}`
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    } else {
      console.error("modal not found.", `my_modal_1 Modify`);
    }
  };

  const copyHTMLToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(html);
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
  const copyCSSToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(css);
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
  const copyJSToClipboard = async () => {
    try {
      if (js) {
        await navigator.clipboard.writeText(js);
        toast.success("CSS copied to clipboard!", {
          style: {
            borderRadius: "10px",
            background: "#242424",
            color: "#fff",
          },
        });
      }
    } catch (err) {
      console.error("Failed to copy to clipboard", err);
    }
  };

  return (
    <div>
      <h3 className="font-semibold mb-2 text-xl">{name}</h3>
      <div
        onClick={showModel}
        className="flex cursor-pointer justify-center items-center bg-[#242424] p-6 rounded-lg overflow-hidden"
      >
        <Component />
      </div>
      <dialog id={`my_modal_${name}`} className="modal">
        <div className="modal-box code-modal-box">
          <div className="grid grid-cols-3 w-full gap-3 mt-12">
            <div>
              <div className="flex justify-between pl-2 pr-4 pb-2">
                <h4 className="">HTML</h4>
                <button onClick={copyHTMLToClipboard} title="copy">
                  <span className="text-2xl text-white">
                    <CiMedicalClipboard />
                  </span>
                </button>
              </div>
              <div className="mockup-code min-h-full max-h-[60vh] overflow-y-auto">
                <pre data-prefix="$">
                  <code>{html}</code>
                </pre>
              </div>
            </div>
            <div>
              <div className="flex justify-between pl-2 pr-4 pb-2">
                <h4 className="">CSS</h4>
                <button onClick={copyCSSToClipboard} title="copy">
                  <span className="text-2xl text-white">
                    <CiMedicalClipboard />
                  </span>
                </button>
              </div>
              <div className="mockup-code min-h-full max-h-[60vh] overflow-y-auto">
                <pre data-prefix="$">
                  <code>{css}</code>
                </pre>
              </div>
            </div>
            <div>
              <div className="flex justify-between pl-2 pr-4 pb-2">
                <h4 className="">JS</h4>
                <button onClick={copyJSToClipboard} title="copy">
                  <span className="text-2xl text-white">
                    <CiMedicalClipboard />
                  </span>
                </button>
              </div>
              <div className="mockup-code min-h-full max-h-[60vh] overflow-y-auto">
                <pre data-prefix="$">
                  <code>{js}</code>
                </pre>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <Button className="absolute top-2 right-2">
                <span className="text-xl text-white">
                  <MdOutlineClose />
                </span>
              </Button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export const SectionFaq = ({ image, name, html, js, css }: any) => {
  const showModel = () => {
    const modal = document.getElementById(
      `my_modal_${name}`
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    } else {
      console.error("modal not found.", `my_modal_1 Modify`);
    }
  };

  const copyCSSToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(css);
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
  const copyJSToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(js);
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

  type FAQ = {
    question: string;
    answer: string;
  };

  const [generator, setGenerator] = useState(true);

  const [faqs, setFaqs] = useState([{ question: "", answer: "" }]);
  const handleFaqChange = (index: number, field: keyof FAQ, value: string) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
  };

  const handleAddFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const handleGenerateFaq = () => {
    console.log(theHtml);
    if (theHtml) {
      setGenerator(false);
    }
  };
  const theHtml = html(faqs);

  const copyHTMLToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(theHtml);
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

  return (
    <>
      <div
        onClick={showModel}
        className="flex cursor-pointer justify-center items-center bg-[#242424] p-6 rounded-lg overflow-hidden"
      >
        <div className="w-96 aspect-square rounded-xl">
          <Image
            src={image}
            alt=""
            width={2000}
            height={2000}
            className="h-full w-full  rounded-md"
          />
        </div>
      </div>
      <dialog id={`my_modal_${name}`} className="modal">
        <div className="modal-box code-modal-box">
          {!generator ? (
            <div className="grid grid-cols-3 w-full gap-3 mt-12">
              <div>
                <div className="flex justify-between pl-2 pr-4 pb-2">
                  <h4 className="">HTML</h4>
                  <button onClick={copyHTMLToClipboard} title="copy">
                    <span className="text-2xl text-white">
                      <CiMedicalClipboard />
                    </span>
                  </button>
                </div>
                <div className="mockup-code min-h-full max-h-[60vh] overflow-y-auto">
                  <pre data-prefix="$">
                    <code>{theHtml}</code>
                  </pre>
                </div>
              </div>
              <div>
                <div className="flex justify-between pl-2 pr-4 pb-2">
                  <h4 className="">CSS</h4>
                  <button onClick={copyCSSToClipboard} title="copy">
                    <span className="text-2xl text-white">
                      <CiMedicalClipboard />
                    </span>
                  </button>
                </div>
                <div className="mockup-code min-h-full max-h-[60vh] overflow-y-auto">
                  <pre data-prefix="$">
                    <code>{css}</code>
                  </pre>
                </div>
              </div>
              <div>
                <div className="flex justify-between pl-2 pr-4 pb-2">
                  <h4 className="">JS</h4>
                  <button onClick={copyJSToClipboard} title="copy">
                    <span className="text-2xl text-white">
                      <CiMedicalClipboard />
                    </span>
                  </button>
                </div>
                <div className="mockup-code min-h-full max-h-[60vh] overflow-y-auto">
                  <pre data-prefix="$">
                    <code>{js}</code>
                  </pre>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-1 mt-12 h-[80%]">
              <div className="flex flex-col gap-1 flex-1">
                {faqs.map((faq, index) => (
                  <div
                    className="grid fonts-input gap-1 items-center"
                    key={index}
                  >
                    <label>
                      <Input
                        value={faq.question}
                        onChange={(e) =>
                          handleFaqChange(index, "question", e.target.value)
                        }
                        placeholder="Question"
                      />
                    </label>
                    <label>
                      <Input
                        value={faq.answer}
                        onChange={(e) =>
                          handleFaqChange(index, "answer", e.target.value)
                        }
                        placeholder="Answer"
                      />
                    </label>
                    <Button
                      className="flex-grow-0 bg-divider"
                      type="button"
                      onClick={handleAddFaq}
                      style={{
                        backgroundColor: "#292929",
                      }}
                    >
                      +
                    </Button>
                  </div>
                ))}
              </div>
              <Button
                className="text-center mx-auto mt-5 px-7  "
                type="button"
                onClick={handleGenerateFaq}
              >
                Submit
              </Button>
            </div>
          )}
          <div className="modal-action">
            <form method="dialog">
              <Button className="absolute top-2 right-2">
                <span className="text-xl text-white">
                  <MdOutlineClose />
                </span>
              </Button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
