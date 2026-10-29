
import { Fragment } from "react";
import SellStep from "./SellStep";
import { sellSteps } from "./sellSteps.data";

function SellSteps() {
    return (
        <div className="min-w-0 flex-1 overflow-hidden">
            <div className="flex w-max animate-sell-scroll items-center gap-4">
                {[...sellSteps, ...sellSteps, ...sellSteps].map((step, index) => (
                    <Fragment key={step.id}>
                        <SellStep
                            number={step.id}
                            label={step.label}
                        />

                        {index < sellSteps.length * 2  && (
                            <span className="shrink-0 text-gray-400">
                                →
                            </span>
                        )}
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

export default SellSteps;
