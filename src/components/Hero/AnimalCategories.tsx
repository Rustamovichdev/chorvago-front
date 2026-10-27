import { useState } from "react";
import { PawPrint, Sprout, Egg, Rabbit, Dog } from "lucide-react";
import AnimalCard from "./AnimalCard";

function AnimalCategories() {

  const [active, setActive] = useState("cattle");

    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            < AnimalCard
                title="Mol va Sigir"
                count="1,420"
                icon={PawPrint}
                isActive={active === "cattle"}
                onClick={() => setActive("cattle")}
            />
            <AnimalCard
                title="Qo'y va Echgi"
                count="1,420"
                icon={Sprout}
                isActive={active === "birds"}
                onClick={() => setActive("birds")}
            />
            <AnimalCard
                title="Parrandalar"
                count="1,420"
                icon={Egg}
                isActive={active === "rabbit"}
                onClick={() => setActive("rabbit")}
            />
            <AnimalCard
                title="Quyon"
                count="1,420"
                icon={Rabbit}
                isActive={active === "pets"}
                onClick={() => setActive("pets")}
            />
            <AnimalCard
                title="It va Mushuk"
                count="1,420"
                icon={Dog}
                isActive={active === "pest"}
                onClick={() => setActive("pest")}
            />
          
        </div>
    );
}

export default AnimalCategories;