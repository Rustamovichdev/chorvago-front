import { Globe, Heart } from "lucide-react";

function HeaderActions() {

    return (
        <div className="flex gap-3">

            <div className="flex gap-2">
                <button className="px-[10px] py-[4px]  rounded hover:bg-gray-100 cursor-pointer">
                    <Globe size={20} />
                </button>
                <button className="px-[10px] py-[4px]  rounded hover:bg-gray-100 cursor-pointer">
                    <Heart size={20} />
                </button>
            </div>

            <div className="flex gap-2">
                <button className="rounded px-3 py-2 bg-[#166534] text-white cursor-pointer">
                    Kirish
                </button>
                <button className="rounded px-3 py-2 bg-[#166534] text-white cursor-pointer">
                    +E'lon berish
                </button>
            </div>
        </div>
    )
}
export default HeaderActions;