import HeroButtons from "./HeroButtons";

function HeroContent() {
    return (
        <div className="flex-1">

            <p className="text-blue-400">
                Hello, I'm
            </p>

            <h1
                className="
                    mt-4
                    text-5xl
                    font-extrabold
                    lg:text-7xl
                "
            >
                Nguyễn Khánh Duy
            </h1>

            <h2
                className="
                    mt-6
                    text-2xl
                    text-slate-300
                "
            >
                Frontend Developer
            </h2>

            <p
                className="
                    mt-8
                    max-w-xl
                    leading-8
                    text-slate-400
                "
            >
                Passionate about building modern,
                responsive and user-friendly web applications.
            </p>

            <HeroButtons />

        </div>
    );
}

export default HeroContent;