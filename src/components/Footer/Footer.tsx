import React from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon

const Footer = () => {
  return (
    <div
      id="contacts"
      className="mt-20 w-full flex flex-col gap-5 text-neutral-500 dark:text-neutral-400 font-medium text-sm"
    >
      <Separator className="mt-10 bg-neutral-500 dark:bg-neutral-500" />
      <div className="flex justify-around items-start mt-5 mb-10">
        <div className="flex flex-col items-start gap-5">
          <Link href={"/"}>Startseite</Link>
          <Link href={"/projects"}>Projekte</Link>
          <Link href={"/skills"}>Fähigkeiten</Link>
          <Link href={"/about"}>Erfahrung</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
        <div className="flex flex-col items-start gap-5">
          <div className="flex gap-2 items-center">
            <FaGithub className="h-4 w-4" />
            <Link href={"https://github.com/YoussefHasna0ui"} target="_blank">
              Github
            </Link>
          </div>
          <div className="flex flex-col items-start gap-5">
            <a
              href="https://mail.google.com/mail/?view=cm&to=hasnaouiyoussef050@gmail.com"
              target="_blank"
              className="flex gap-2 items-center"
            >
              <MdEmail className="h-4 w-4" />
              <p>E-Mail senden</p>
            </a>
            <a
              href="https://wa.me/21628257211"
              target="_blank"
              className="flex gap-2 items-center"
            >
              <BsWhatsapp className="h-4 w-4" />
              <p> WhatsApp mich </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
