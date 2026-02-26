interface Skill {
  name: string;
  icon?: React.ReactNode;
}

interface Props {
  skills: Skill[];
  direction: "left" | "right";
}

export default function SkillRow({ skills, direction }: Props) {
  const animationClass =
    direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div className="overflow-hidden py-8">
      <div className={`marquee ${animationClass}`}>
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-zinc-300 text-lg whitespace-nowrap hover:text-white transition"
          >
            {skill.icon && <span className="text-xl">{skill.icon}</span>}
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
}