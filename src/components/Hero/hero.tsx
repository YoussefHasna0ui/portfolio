import Image from "next/image";
import { MdLocationPin } from "react-icons/md";

export const Hero = () => {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row justify-between items-start md:space-x-14 w-full mb-10"
    >
      <div className="flex md:w-4/5 flex-col mt-10 px-2">
        <p className="font-extrabold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
          Youssef Hasnaoui
        </p>
        <div className="items-center flex-wrap text-zinc-800 dark:text-zinc-300 mb-5 text-lg font-medium">
          Angehender{" "}
          <span className="font-bold bg-slate-200 p-1 rounded-sm dark:text-black px-2">
            Softwareentwickler
          </span>
        </div>
        <div className="text-base w-full">
          Ein Student, der leidenschaftlich gerne Websites und
          Desktop-Anwendungen erstellt und innovative Lösungen entwickelt.
          Verbinden Sie sich mit mir auf{" "}
          <a
            href="https://www.linkedin.com/in/youssef-hasnaoui-2968b4337/"
            target="_blank"
            className="font-semibold px-1 bg-slate-200 rounded-sm dark:text-black"
          >
            LinkedIn
          </a>{" "}
          und{" "}
          <a
            href="https://x.com/YoussefHasna0ui"
            target="_blank"
            className="font-semibold bg-slate-200 px-1 rounded-sm dark:text-black"
          >
            Twitter
          </a>
        </div>
      </div>
      <div className="relative justify-center content-center   flex-shrink-1 p-4 md:p-4 md:order-last order-first">
        <Image
          width={200}
          height={200}
          src={"/avatar.jpg"}
          alt={"avatar"}
          className="object-contain rounded-lg "
        />
        <div className="text-sm font-medium flex items-center my-1 gap-1">
          {" "}
          <MdLocationPin /> Ariana,Tunesien
        </div>
      </div>
    </div>
  );
};
