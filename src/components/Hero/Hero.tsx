import AnimalCategoreis from "./AnimalCategories";
import HeroTop from "./HeroTop";

function Hero() {
    
    return (
        <section className="bg-gradient-to-br from-[#166534] to-[#22c55e]  py-8">
            <div className="mx-auto flex max-w-300 flex-col gap-8 px-4">
                <HeroTop />
                <AnimalCategoreis/>
            </div>
        </section>
    );
}

export default Hero;