import Card from "./components/Card";
import "./keyframes.css";
import Code from "./components/Code";

const keyframes = [
  {
    name: "UpDown",
    keyframes: "upDown 4s ease-in-out infinite",
  },
  {
    name: "DownUp",
    keyframes: "downUp 4s ease-in-out infinite",
  },
  {
    name: "BeforeScale",
    keyframes: "beforeScale 4s ease-in-out infinite",
  },
  {
    name: "FadeInOut",
    keyframes: "fadeInOut 4s  ease infinite",
  },
  {
    name: "MovingCircle",
    keyframes: "movingcircle 4s linear infinite",
  },
  {
    name: "Wiggle",
    keyframes: "wiggle 4s linear infinite",
  },
  {
    name: "ReverseWiggle",
    keyframes: "reverse-wiggle 4s linear infinite",
  },
  {
    name: "SmoothScale",
    keyframes: "smoothScale 4s ease-in-out infinite alternate",
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
                type={"image"}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
export default page;
