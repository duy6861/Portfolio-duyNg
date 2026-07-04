import NavItem from "../ui/NavItem";
import { Moon, Languages, Menu } from "lucide-react";

function Navbar() {
    return (
        <header
            className="
            fixed
            top-6
            left-1/2
            z-50
            w-[95%]
            max-w-6xl
            -translate-x-1/2
        "
        >
            <div
                className="
                flex
                items-center
                justify-between

                rounded-full

                border
                border-slate-700

                bg-slate-900/70

                px-8

                py-4

                backdrop-blur-xl

                shadow-xl
            "
            >
                <h1
                    className="
                    text-2xl
                    font-bold
                    tracking-wider
                    text-blue-400
                "
                >
                    DK
                </h1>

                <nav className="hidden gap-8 md:flex">

                    <NavItem>Home</NavItem>

                    <NavItem>About</NavItem>

                    <NavItem>Experience</NavItem>

                    <NavItem>Skills</NavItem>

                    <NavItem>Projects</NavItem>

                    <NavItem>Contact</NavItem>

                </nav>

                <div className="hidden items-center gap-5 md:flex">

                    <button>

                        <Moon size={20} />

                    </button>

                    <button>

                        <Languages size={20} />

                    </button>

                </div>

                <button className="md:hidden">

                    <Menu />

                </button>

            </div>
        </header>
    );
}

export default Navbar;