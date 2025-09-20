import ISkill from "@/interface/ISkill";

export default function SkillCard({
  icon: Icon,
  title,
  technologies,
  knowledgePercent,
}: ISkill) {
  return (
    <div className="border flex flex-col justify-between border-black rounded-lg p-4 min-h-[160px]  max-w-sm bg-white text-black">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <>
            <Icon />
          </>
          <h3 className="font-bold">{title}</h3>
        </div>

        <div className="mb-3">
          <h4 className="font-semibold text-sm mb-1">Technologies:</h4>
          <p className="text-xs text-gray-600 ">{technologies.join(", ")}</p>
        </div>
      </div>


      <div className="w-full border border-black rounded h-5 overflow-hidden relative">
        <div
          className="bg-black h-full text-white text-xs flex items-center justify-center"
          style={{ width: `${knowledgePercent}%` }}
        >
          {knowledgePercent}%
        </div>
      </div>
    </div>
  );
}
