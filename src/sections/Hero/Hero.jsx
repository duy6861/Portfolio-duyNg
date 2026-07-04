import HeroAvatar from "./HeroAvatar";
import HeroContent from "./HeroContent";

function Hero() {
    return (
        <section
            className="
                flex
                min-h-screen
                items-center
                px-6
            "
        >
            <div
                className="
                    mx-auto
                    flex
                    max-w-7xl
                    flex-col-reverse
                    items-center
                    gap-12
                    lg:flex-row
                "
            >

                <HeroContent />

                <HeroAvatar />

            </div>
        </section>
    );
}

export default Hero;