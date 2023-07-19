import Image from "next/image";
import { Badge } from "./ui/badge";

type Props = {
  project: {
    name: string;
    technologies: string[];
    view?: string;
    github: string;
  };
};

export default function Project({
  project: { name, technologies, view, github },
}: Props) {
  return (
    <div className="border py-4 px-8 rounded-lg w-[70%] sm:w-full mx-auto">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">{name}</p>
        <div className="flex items-center gap-2">
          {view ? (
            <a href={view} target="_blank">
              <div title="view" className="w-8 h-8 relative">
                <Image
                  className="object-cover"
                  src="/images/view.svg"
                  fill
                  alt="view"
                />
              </div>
            </a>
          ) : (
            ""
          )}

          <a href={github} target="_blank">
            <div title="github link" className="w-6 h-6 relative">
              <Image
                className="object-cover"
                src="/images/github.svg"
                fill
                alt="github"
              />
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap mt-4 gap-2">
        {technologies.map((technology) => (
          <Badge key={technology}>{technology}</Badge>
        ))}
      </div>
    </div>
  );
}
