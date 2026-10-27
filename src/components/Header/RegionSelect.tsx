import { ChevronDown, MapPin } from "lucide-react";

function RegionSelect() {

    return (

        <button className=" flex gap-2 items-center rounded-lg bg-gray-100 px-3 py-3 text-sm text-gray-700 border border-gray-200 cursor-pointer">
            <MapPin size={18} />
            Barcha viloyatlar
            <ChevronDown size={16} />
        </button>
    );
}
export default RegionSelect;