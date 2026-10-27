import { LayoutGrid, PawPrint, Sprout, Egg, Rabbit, Dog } from "lucide-react";

function CategoryNav() {
    return (
      
    <nav className="mx-auto flex max-w-300 gap-6 px-4 text-sm font-medium mb-2">
            
      <button className="flex items-center gap-1.5 border-b-2 border-transparent py-3 text-gray-600 transition-colors duration-400 ease-in-out hover:border-[#166534] hover:text-[#166534] cursor-pointer">
        <LayoutGrid size={16} />
        Barcha e'lonlar
      </button>

      {/* aktiv */}
      <button className="flex items-center gap-1.5 border-b-2 border-transparent py-3 text-gray-600 transition-colors duration-400 ease-in-out hover:border-[#166534] hover:text-[#166534] cursor-pointer">
        <PawPrint size={16} />
        Mol va Sigir
      </button>

      <button className="flex items-center gap-1.5 border-b-2 border-transparent py-3 text-gray-600 transition-colors duration-400 ease-in-out hover:border-[#166534] hover:text-[#166534] cursor-pointer">
        <Sprout size={16} />
        Qo'y va Echki
      </button>

      <button className="flex items-center gap-1.5 border-b-2 border-transparent py-3 text-gray-600 transition-colors duration-400 ease-in-out hover:border-[#166534] hover:text-[#166534] cursor-pointer">
        <Egg size={16} />
        Parrandalar
      </button>

      <button className="flex items-center gap-1.5 border-b-2 border-transparent py-3 text-gray-600 transition-colors duration-400 ease-in-out hover:border-[#166534] hover:text-[#166534] cursor-pointer">
        <Rabbit size={16} />
        Quyon
      </button>

      <button className="flex items-center gap-1.5 border-b-2 border-transparent py-3 text-gray-600 transition-colors duration-400 ease-in-out hover:border-[#166534] hover:text-[#166534] cursor-pointer">
        <Dog size={16} />
        It va Mushuklar
      </button>
    </nav>
  );
}

export default CategoryNav;