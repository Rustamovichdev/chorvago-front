import type { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  count: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick: () => void;
};

function AnimalCard({ title, count, icon: Icon, isActive, onClick, }: Props) {
  
  return (
    <button
      onClick={onClick}
        className={`relative flex cursor-pointer flex-col items-start rounded-xl border-2 p-4  text-left transition-colors duration-300 ${isActive ? "border-[#166534] bg-white ":"border-gray-200 bg-white hover:border-gray-300"
      }`}
    >
      {isActive && (
        <span className="absolute right-3 top-3 rounded bg-green-300 px-2 py-0.5 text-[10px] font-bold text-green-900">
          FAOL
        </span>
      )}

      <div
        className={`flex h-10 w-10 items-center justify-center rounded-lg ${isActive ? "bg-[#166534] text-white" : "bg-indigo-50 text-indigo-600"
          }`}
      >
        <Icon size={20} />
      </div>

      <h3
        className={`mt-3 text-base font-bold ${isActive ? "text-[#166534]" : "text-slate-900"
          }`}
      >
        {title}
      </h3>
      <p className="text-xs text-gray-500">{count} e'lon</p>
    </button>
  );
}

export default AnimalCard;