type SellStepProps = {
    number: number;
    label: string;
};

function SellStep({ number, label }: SellStepProps) {
    return (
        <div className="flex shrink-0 items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#166534] text-sm font-semibold text-white">
                {number}
            </span>
            <span className="whitespace-nowrap text-sm font-medium text-gray-800">
                {label}
            </span>
        </div>
    );
}

export default SellStep;