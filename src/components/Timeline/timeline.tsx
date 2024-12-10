"use client";

import { useState } from "react";
import { BsArrowUp, BsPatchCheckFill } from "react-icons/bs";

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <BsPatchCheckFill className="text-blue-500 mr-2" />

        <p className="font-medium text-gray-900 dark:text-gray-100 text-lg">
          {title}
        </p>
      </div>
      <p className="text-gray-700 dark:text-gray-300 ml-6 text-base">
        {children}
      </p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>Ende 2019 bis 2021</Year>
    <ul>
      <Step title="Backend-Entwicklung mit Node.js">
        Von Ende 2019 bis 2021 konzentrierte ich mich auf die
        Backend-Entwicklung mit Node.js. Ich erlernte den Umgang mit Express.js,
        API-Entwicklung, Datenbanken (wie MongoDB und PostgreSQL) sowie
        Authentifizierungstechniken wie JWT. Zudem integrierte ich Prisma als
        ORM für eine effiziente Datenbankabstraktion und verbesserte die
        Verwaltung von Datenmodellen. Dabei arbeitete ich an mehreren Projekten,
        die eine effiziente serverseitige Logik und nahtlose Kommunikation
        zwischen Frontend und Backend erforderten.
      </Step>
      <Step title="Fortgeschrittene Konzepte in Go und Java">
        Parallel dazu vertiefte ich meine Kenntnisse in Go und Java, indem ich
        fortgeschrittene Konzepte wie Concurrency, Goroutines in Go und
        Multithreading in Java erlernte. Ich arbeitete an anspruchsvolleren
        Projekten, bei denen diese Sprachen zur Entwicklung skalierbarer,
        performanter und fehlertoleranter Anwendungen genutzt wurden.
      </Step>
    </ul>

    <Divider />
    <Year>2019</Year>
    <ul>
      <Step title="Java 🙌🏻">
        Im Jahr 2019 begann ich intensiv mit Java zu arbeiten. Ich erlernte die
        grundlegenden Konzepte der objektorientierten Programmierung und baute
        Anwendungen, die meine Fähigkeiten in der Verwaltung von Datenstrukturen
        und der Fehlerbehandlung weiterentwickelten. Durch Projekte wie kleine
        Desktop-Apps und einfache Backend-Systeme konnte ich das Gelernte in der
        Praxis umsetzen und meine Expertise in Java erweitern.
      </Step>
      <Step title="Go 🙌🏻">
        Parallel zu Java widmete ich mich auch Go (Golang). Ich lernte, wie man
        mit Go effiziente, performante und skalierbare Anwendungen erstellt,
        insbesondere für Backend-Entwicklung und APIs. Meine Projekte in Go
        beinhalteten einfache Microservices und Webanwendungen, bei denen ich
        von der Geschwindigkeit und den geringen Ressourcenanforderungen dieser
        Sprache beeindruckt war.
      </Step>
    </ul>
    <Divider />
    <Year>Juni 2017</Year>
    <ul>
      <Step title="Started Freelance Work as Front-End Developer">
        Im Juni 2017 begann ich meine freiberufliche Tätigkeit, indem ich
        Front-End-Anwendungen entwickelte und mein Wissen in modernen
        Technologien vertiefte. Besonders in React habe ich mich intensiv mit
        wichtigen Hooks wie useState, useEffect und useContext
        auseinandergesetzt, um die Zustandsverwaltung und die
        Komponentenhierarchie effizient zu gestalten. Später erweiterte ich
        meine Kenntnisse durch Redux, um die globale Zustandsverwaltung zu
        implementieren, und habe gelernt, wie man den Store mit dispatch und
        useSelector für eine skalierbare und wartbare Architektur nutzt. Ein
        Beispiel hierfür ist eine E-Commerce-Plattform, bei der ich die
        Warenkorbfunktion mit Redux verwaltete, um eine nahtlose
        Benutzererfahrung zu gewährleisten. In diesen Projekten habe ich auch
        das Zusammenspiel zwischen Front-End und Back-End verbessert und die
        Leistung durch Code-Splitting und Lazy Loading optimiert
      </Step>
    </ul>
    <Divider />
    <Year>April 2017</Year>
    <ul>
      <Step title="Das Erlernen von JavaScript, PHP und den wesentlichen Webentwicklungstools abgeschlossen.📜">
        Ich habe die Grundlagen der Webentwicklung gelernt, einschließlich HTML5
        für die Strukturierung von Webseiten, CSS3 für das Styling und
        JavaScript für die Interaktivität. Zudem habe ich grundlegende
        Kenntnisse in Git für Versionskontrolle erworben und an Projekten mit
        GitHub zusammengearbeitet. Außerdem habe ich ein wenig PHP ausprobiert,
        um meine Webentwicklungsfähigkeiten weiter auszubauen.
      </Step>
      <Step title="Elon Musk: Mein Vorbild und Inspirationsquelle 🚀">
        Ich habe zum ersten Mal von Elon Musk gehört und war fasziniert von
        seiner innovativen Herangehensweise an Technologie und Unternehmertum.
        Sein Durchhaltevermögen, Grenzen zu überschreiten und komplexe
        Herausforderungen anzugehen, hat mich tief inspiriert. Im Laufe der Zeit
        wurde er nicht nur zu einem Vorbild, sondern auch zu einer Quelle der
        Motivation, die meine Aspirationen in Technik und
        Ingenieurwissenschaften prägte. Seine Fähigkeit, ehrgeizige Ideen in die
        Realität umzusetzen, lehrte mich die Bedeutung von Ausdauer, Kreativität
        und der Kraft, aus Misserfolgen zu lernen.
      </Step>
    </ul>
    <Divider />
    <Year> 23Aug.2005</Year>
    <ul>
      <Step title="Ein zukünftiger Ingenieur wurde in Tunesien geboren 👶🏼 🍼" />
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3
        id="about"
        className="font-bold text-2xl md:text-5xl tracking-tight mb-4 mt-20 text-black dark:text-white"
      >
        Persönliche Zeitleiste
      </h3>
      <Year>2023 - 2024</Year>
      <ul>
        <Step title="Zeit für Abiturvorbereitung genommen">
          Von 2023 bis 2024 konzentrierte ich mich auf die Vorbereitung für mein
          Abitur. In meiner Freizeit lernte ich jedoch weiterhin neue
          Technologien und Frameworks. Ich erlernte die Grundlagen von Rust und
          arbeitete mit Bibliotheken wie ShadCNUI, Redux, Tailwind CSS und
          Docker, um meine Fähigkeiten weiter auszubauen. Außerdem arbeitete ich
          an verschiedenen zufälligen Projekten, einschließlich des Portfolios,
          das Sie gerade lesen.
        </Step>
      </ul>
      <Divider />
      <Year>2022 - 2023</Year>
      <ul>
        <Step title="Zufällige Projekte und Weiterbildung">
          Während dieser Zeit habe ich mich mit verschiedenen kleineren
          Projekten beschäftigt, die nichts mit meinen Hauptzielen zu tun
          hatten. Ich habe auch in meiner Freizeit neue Hobbys entdeckt, wie das
          Erlernen von Fotografie und das Experimentieren mit neuen
          Software-Tools.
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <>
          <FullTimeline />
          <button
            type="button"
            className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
            onClick={() => showFullTimeline(false)}
          >
            Weniger anzeigen
            <BsArrowUp className="h-4 w-4 ml-1" />
          </button>
        </>
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          Mehr anzeigen
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
