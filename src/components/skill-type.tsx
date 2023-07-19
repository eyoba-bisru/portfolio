import Image from "next/image";
import skills from "../data/skills.json";

type Props = {
  type: string;
};

export default function SkillType({ type }: Props) {
  return (
    <div className="flex flex-col items-center gap-6 mt-8 p-4 rounded-lg">
      <h3 className="text-lg">{type}</h3>
      <div className="flex items-center gap-6">
        {
          // @ts-ignore
          skills[`${type.toLowerCase()}`].map((skill) => (
            <div key={skill} title={skill.title} className="w-16 h-16 relative">
              <Image
                className="object-cover"
                src={skill.img}
                fill
                alt={skill.title}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
}
