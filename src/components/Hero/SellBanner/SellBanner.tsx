import SellSteps from "./SellSteps";

function SellBanner() {
    return (
        <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-[#f1f1fb] px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[535px] shrink-0 ">
                <h3 className="flex items-center gap-2 font-semibold text-gray-900">
                    Hayvon sotmoqchimisiz?
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                    Telefon raqamingiz orqali 30 soniyada ro'yxatdan o'ting va
                    bepul e'lon joylashtiring! Hech qanday komissiya yo'q.
                </p>
            </div>

            <div className="flex min-w-0 items-center gap-6 lg:flex-1">
                <SellSteps />
                <button
                    type="button"
                    className="shrink-0 whitespace-nowrap rounded-lg bg-[#166534] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#14532d] cursor-pointer"
                >
                    Bepul e'lon berish
                </button>
            </div>
        </div>
    );
}

export default SellBanner;