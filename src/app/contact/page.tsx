import Contact from "@/components/Contact/contact";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  return (
    <main className="w-full h-full text-xl flex items-center justify-center mx-auto my-5">
      <div className="flex flex-col justify-center items-start w-full max-w-2xl mx-auto mb-5">
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
