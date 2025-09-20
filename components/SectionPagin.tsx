import { FaArrowRight,FaArrowLeft } from 'react-icons/fa';
interface PaginProps {
  Previous: string | null;
  Next: string | null;
  sectionName: string;
  sectionNumber: number;
  setSectionNumber: (num: number) => void;
}

export default function SectionPagin({
  Previous,
  Next,
  sectionName,
  sectionNumber,
  setSectionNumber,
}: PaginProps) {
  return (
    <div className="w-full grid grid-cols-3  items-center">
      {/* Previous */}
      <div
        className={`text-sm flex items-center gap-2  py-1 justify-self-start ${
          Previous ? "visible" : "invisible"
        }`}
      >
        <FaArrowLeft
          size={16}
          strokeWidth={2}
          className="cursor-pointer transition-transform hover:scale-110 hover:text-gray-700"
          onClick={() => Previous && setSectionNumber(sectionNumber - 1)}
        />
        <span className="font-semibold">{Previous}</span>
      </div>

      {/* Section Name */}
      <span className="text-lg text-center font-bold">{sectionName}</span>

      {/* Next */}
      <div
        className={`text-sm flex items-center gap-2  py-1 justify-self-end ${
          Next ? "visible" : "invisible"
        }`}
      >
        <span className="font-semibold">{Next}</span>
        <FaArrowRight
          size={16}
          strokeWidth={2}
          className="cursor-pointer transition-transform hover:scale-110 hover:text-gray-700"
          onClick={() => Next && setSectionNumber(sectionNumber + 1)}
        />
      </div>
    </div>
  );
}
