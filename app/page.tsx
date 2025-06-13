import { ClipPath } from "./components/ClipPath";
import { ClipPath as Cp } from "./components/ClipPathIcon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto mt-8">
        <div className="mb-6 w-full">
          <h2 className="mb-4 text-4xl text-white font-bold uppercase">
            Generator
          </h2>
          <ClipPath />
        </div>
        <div className="mb-6 w-full">
          <h2 className="mb-4 text-4xl text-white font-bold uppercase">
            Animation
          </h2>
          <Cp keyframe={true} />
        </div>
        <div className="mb-6 w-full">
          <h2 className="mb-4 text-4xl text-white font-bold uppercase">
            Sections
          </h2>
          <Cp />
        </div>
      </div>
    </main>
  );
}
