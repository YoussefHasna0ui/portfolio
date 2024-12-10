// import Contact from "@/components/Contact/contact";
import Footer from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/hero";
// import Project from "@/components/Project/projects";//done
// import Skills from "@/components/Skills/Skills"; //done
// import Timeline from "@/components/Timeline/timeline"; //
import { EducationExperience } from "@/components/Work/work";

export default function Home() {
  return (
    <main className="w-full h-full text-xl flex items-center justify-center mx-auto my-5">
      <div className="flex flex-col justify-center items-start w-full max-w-2xl mx-auto mb-5">
        <Hero />
        <EducationExperience />
        {/* <Project /> */}
        {/* <Skills /> */}
        {/* <Timeline /> */}
        {/* <Contact /> */}
        <Footer />
      </div>
    </main>
  );
}
