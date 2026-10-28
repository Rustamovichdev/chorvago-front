import { Fragment, useRef } from "react";
import SellStep from "./SellStep";
import { sellSteps } from "./sellSteps.data";



function SellSteps() {

    const stepsRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={stepsRef} className="flex min-w-0 items-center gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onWheel={(e) => {
                e.currentTarget.scrollLeft += e.deltaY;
            }}
        >
            {sellSteps.map((step, index) => (
                <Fragment key={step.id}>
                    <SellStep number={step.id} label={step.label} />
                    {index < sellSteps.length - 1 && (
                        <span className="shrink-0 text-gray-400">→</span>
                    )}
                </Fragment>
            ))}
        </div>
    );
}

export default SellSteps;