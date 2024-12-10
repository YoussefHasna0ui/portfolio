"use client"
import { EducationType, ExperienceType } from "@/lib/constants";
import React from "react";

export const ExTimeline = ({ events }: { events: ExperienceType[] }) => {
  return (
    <div className="relative border-l-2 border-gray-300 dark:border-gray-700 m-10">
      {events.map((event, index) => (
        <div key={index} className="mb-10 ml-4 flex items-start">
          {/* Image */}
          <img
            src={event.icon}
            alt={event.title}
            className="w-10 h-10 rounded-full border-2 border-blue-500 dark:border-green-400 -left-5 absolute"
          />
          {/* Event Content */}
          <div className="ml-10">
            <p className="text-lg font-semibold">{event.title}</p>
            <p className="text-base text-gray-600 dark:text-gray-300">
              {event.organisation}
            </p>
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              {event.date}
            </p>

            {/* Collapsible Section */}
            <CollapsiblePoints points={event.points} />
          </div>
        </div>
      ))}
    </div>
  );
};

const CollapsiblePoints = ({ points }: { points: string[] }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      {/* Button to toggle the collapse */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mt-2 text-blue-500 dark:text-blue-300 font-medium hover:underline"
      >
        {isOpen ? "Weniger anzeigen" : "Mehr anzeigen"}
      </button>

      {/* Collapsible content */}
      <div
        className={`transition-all duration-300 ${
          isOpen ? "max-h-full" : "max-h-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-wrap gap-4 mt-2">
          {points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-sm pl-1 tracking-wider border-l-2 border-gray-300 dark:border-gray-700 px-2"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export const EduTimeline = ({ events } : {events : EducationType[]}) => {
  return (
    <div className="relative border-l-2 border-gray-300 dark:border-gray-700 m-10">
      {events.map((event, index) => (
        <div key={index} className="mb-10 ml-4 flex items-start">
          {/* Image */}
          <img 
            src={event.icon} 
            alt={event.title} 
            className="w-10 h-10 rounded-full border-2 border-blue-500 dark:border-green-400 -left-5 absolute" 
          />
          {/* Event Content */}
          <div className="ml-10">
          <p className="text-lg font-semibold">{event.title}</p>
          <p className="text-base text-gray-600 dark:text-gray-300">{event.organisation}</p>
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{event.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};