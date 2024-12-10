import { skills } from "@/lib/constants";

const Skills = () => {
  const current = skills.filter((skill) => skill.type === "Working");
  const other = skills.filter((skill) => skill.type === "Other");
  return (
    <div id="skills" className="w-full flex flex-col mx-2 mt-20 mb-10">
      <p className="text-2xl md:text-5xl font-bold">Technologien</p>
      <div className="flex flex-col items-start mt-8">
        <p className="text-lg font-semibold text-slate-800 dark:text-slate-400">
          Tech-Stack (Praktische Erfahrung){" "}
        </p>
        <div className="flex flex-wrap w-full gap-4 mt-5">
          {current.map((skill) => (
            <div
              key={skill.name}
              className="flex w-max h-full items-center gap-3 border-2 k px-2 py-1"
            >
              <div className="w-full flex flex-col justify-center items-start h-full">
                <p className="font-semibold text-sm">{skill.name}</p>
                <p
                  className={`text-white dark:text-gray-300 dark:bg-transparent rounded-md text-xs font-medium italic bg-gray-700 dark:bg-gray-800 p-1`}
                >
                  {skill.tag}
                </p>
              </div>
              <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
            </div>
          ))}
        </div>
        <p className="text-lg font-semibold mt-5 text-slate-800 dark:text-slate-400">
          Tech-Stack (Geübt){" "}
        </p>
        <div className="flex flex-wrap w-full gap-4 mt-5">
          {other.map((skill) => (
            <div
              key={skill.name}
              className="flex w-max h-full items-center gap-3 border-2 k px-2 py-1"
            >
              <div className="w-full flex flex-col justify-center items-start h-full">
                <p className="font-semibold text-sm">{skill.name}</p>
                <p
                  className={`text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs font-medium italic bg-gray-100 dark:bg-gray-800 p-1`}
                >
                  {skill.tag}
                </p>
              </div>
              <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
