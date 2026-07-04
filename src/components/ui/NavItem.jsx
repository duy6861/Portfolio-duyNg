function NavItem({ children }) {
    return (
        <a
            href="#"
            className="
            relative
            text-slate-300
            transition-all
            duration-300
            hover:text-white

            after:absolute
            after:left-0
            after:-bottom-1
            after:h-[2px]
            after:w-0
            after:bg-blue-500
            after:transition-all
            after:duration-300

            hover:after:w-full
        "
        >
            {children}
        </a>
    );
}

export default NavItem;