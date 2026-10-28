type CardBadgeProps = {
    text: string;
};

function CardBadge({ text }: CardBadgeProps) {
    return (
        <span className="rounded-md bg-white/90 px-2 py-1 text-[11px] font-medium text-[#166534] shadow-sm">
            {text}
        </span>
    );
}

export default CardBadge;