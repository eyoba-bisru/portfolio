import SkillType from "../skill-type";
export default function Skills() {
  return (
    <div className="mt-10 min-h-[100vh] mx-auto " id="skills">
      <header className="text-center text-3xl font-extrabold">Skills</header>
      <div className="mt-8">
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <SkillType type="frontend" />
          <SkillType type="backend" />
          <SkillType type="API" />
          <SkillType type="Database" />
          <SkillType type="Version Control" />
          <SkillType type="Mobile" />
        </div>
        <div>
          <SkillType type="Others" />
        </div>
      </div>
    </div>
  );
}
