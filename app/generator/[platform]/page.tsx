import ProjectForm from "@/app/components/clickfunnels/ProjectForm";
import ProjectFormSystemio from "@/app/components/systemio/ProjectFormSystemio";

const page = ({ params }: any) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto">
        {params.platform === "clickfunnels" ? (
          <ProjectForm />
        ) : (
          <ProjectFormSystemio />
        )}
      </div>
    </main>
  );
};
export default page;
