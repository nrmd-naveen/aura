import LogoSVG from "../svg/LogoSVG";
import Button from "./Button";

const NavBar = ({ heroRef, projectsRef, contactRef, scrollToSection }) => {
    return (
        <>
            <div className="p-2">
                <div className=" p-2 px-6 md:p-6 z-40  flex justify-center items-center h-20 ">
            <header className="z-[100] fixed md:w-auto flex jutisfy-between items-center h-[55px] pl-4 px-2  bg-white/10 backdrop-blur-lg border-mywhite-border shadow-md rounded-xl">
                <div className="flex justify-between w-full h-full gap-4">
                <div className=" h-full flex items-center">
                <button onClick={() => scrollToSection(heroRef)}>
                    <LogoSVG />
                </button>   
                </div>
                <div className="flex justify-center items-center font-sora ">
                    <ul className="flex gap-0 ">
                        <li className="text-white/80 hover:text-white text-sm md:text-base px-4 py-3 rounded-full "><button className="cursor-pointer" onClick={() => scrollToSection(projectsRef)}>Projects</button></li>
                        <li className="relative text-white/80 hover:text-white text-sm md:text-base px-4 py-3 rounded-full"><button className=" cursor-pointer" onClick={() => scrollToSection(contactRef)}>
                            Contact Us
                        </button></li>
                    </ul>
                </div>
                </div>
            </header>
        </div>
            </div>
        </>
  )
};


const menus = [
    {
        name: "Projects",
        href: "#ourWorks",
    },
    {
        name: "Contact Us",
        href: "#contactUs",
    }
]


const Header = () => {

    return <>
        <div className=" p-2 px-6 md:p-6 z-40  flex justify-center items-center h-20 ">
            <header className="z-[100] fixed md:w-auto flex jutisfy-between items-center h-[55px] pl-4 px-2  bg-white/10 backdrop-blur-lg border-mywhite-border shadow-md rounded-xl">
                <div className="flex justify-between w-full h-full gap-4">
                <div className=" h-full flex items-center">
                <a href="#heroSection">
                    <LogoSVG />
                </a>
                </div>
                <div className="flex gap-0 ">
                    {
                            menus.map((menu, index) => (
                            <a
                                    className="h-full flex justify-center items-center outline-0"
                                    href={menu.href}
                                    key={index}
                            >
                                    
                            <span
                                className="text-white font-barlow tracking-wide text-sm md:text-base px-4 py-3 rounded-full"   
                        >{menu.name}
                        </span></a>
                        ))
                    }
                </div>
                </div>
            </header>
        </div>
    </>
}

export default NavBar;
