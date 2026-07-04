function HeroButtons() {
    return (
        <div className="mt-10 flex flex-wrap gap-4">

            <button
                className="
                    rounded-full
                    bg-blue-500
                    px-8
                    py-3
                    font-semibold
                    transition
                    hover:bg-blue-600
                "
            >
                Download CV
            </button>

            <button
                className="
                    rounded-full
                    border
                    border-slate-600
                    px-8
                    py-3
                    transition
                    hover:border-blue-500
                    hover:text-blue-400
                "
            >
                Contact Me
            </button>

        </div>
    );
}

export default HeroButtons;