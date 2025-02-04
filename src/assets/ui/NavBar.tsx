import LogoSVG from "../svg/LogoSVG";
import Button from "./Button";

const NavBar = () => {
    return (
        <>
            {/* <div className="fixed  w-full h-20 bg-transparent py-2 px-20 ">
                <div className="z-50 w-full h-full "></div>
            </div> */}
            <div className="p-2">
                <Header />
            </div>
        </>
  )
};


const menus = [
    {
        name: "Projects",
        href: "#projects",
    },
    {
        name: "Contact Us",
        href: "#contact",
    }
]


const Header = () => {

    return <>
        <div className=" p-2 px-6 md:p-6 z-40  flex justify-center items-center h-20 ">
            <header className="z-[100] fixed md:w-auto flex jutisfy-between items-center h-[55px] pl-4 px-2  bg-white/10 backdrop-blur-lg border-mywhite-border shadow-md rounded-xl">
                <div className="flex justify-between w-full h-full gap-4">
                <div className=" h-full flex items-center">
                <LogoSVG />
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
