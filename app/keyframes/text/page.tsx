import Card from "../components/Card";
import "../keyframes.css";
import Code from "../components/Code";

const keyframes = [
  {
    name: "Neon 1",
    keyframes: "neon1 1.5s ease-in-out infinite alternate",
    type: "text",
  },
  {
    name: "Neon 2",
    keyframes: "neon2 1.5s ease-in-out infinite alternate",
    type: "text",
  },
  {
    name: "Neon 3",
    keyframes: "neon3 1.5s ease-in-out infinite alternate",
    type: "text",
  },
  {
    name: "Neon 4",
    keyframes: "neon4 1.5s ease-in-out infinite alternate",
    type: "text",
  },
  {
    name: "Neon 5",
    keyframes: "neon5 1.5s ease-in-out infinite alternate",
    type: "text",
  },
  {
    name: "Neon 6",
    keyframes: "neon6 1.5s ease-in-out infinite alternate",
    type: "text",
  },
];

const page = () => {
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
              <Card
                key={keyframe.name}
                name={keyframe.name}
                keyframe={keyframe.keyframes}
                type={keyframe?.type ? keyframe?.type : "image"}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
export default page;
