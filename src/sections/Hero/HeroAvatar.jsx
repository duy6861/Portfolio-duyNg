import avatar from "../../assets/images/duy.jpg";

function HeroAvatar() {
    return (
        <div
            className="
                flex
                flex-1
                justify-center
            "
        >
            <img
                src={avatar}
                alt="Nguyễn Khánh Duy"
                className="
                    h-80
                    w-80
                    rounded-full
                    border-4
                    border-slate-700
                    object-cover
                "
            />
        </div>
    );
}

export default HeroAvatar;