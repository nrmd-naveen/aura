
import { GmailF, InstagramF, LinkedInF } from "../svg/Icons";
import LogoSVG from "../svg/LogoSVG";

const Footer = (
  {
    heroRef,
    projectsRef,
    contactRef,
    servicesRef,
    scrollToSection
  }: {
    heroRef : React.RefObject<HTMLInputElement> 
    projectsRef: React.RefObject<HTMLInputElement> 
    contactRef: React.RefObject<HTMLInputElement> 
    servicesRef: React.RefObject<HTMLInputElement> 
    scrollToSection: (refSection: React.RefObject<HTMLInputElement>) => void
  }) => {
    return (
        <>
        <div className="flex flex-col gap-8 justify-center items-center py-6 bg-gradient-to-b to-[#363636] md:via-[#181818] rounded-t-xl px-4 md:px-20 mt-40 text-nowrap">
          <div className="flex justify-around md:justify-between items-center w-full  md:px-20">
            <div className="bg- flex flex-col md:gap-5">
              <span  className=" scale-150 md:scale-100 cursor-pointer pl-10 md:pl-1 pt-4" onClick={() => scrollToSection(heroRef)}>
              <LogoSVG />
              </span>
              <span className=" text-white/100 opacity-0 md:opacity-100 text-xs md:text-base tracking-wider font-barlow">
                Complete digital services for brand success.
              </span>
            </div>
            <div className="flex flex-col gap-1 text-white/80 text-sm md:text-base tracking-wider font-sora">
              <span className="hover:text-white cursor-pointer" onClick={() => scrollToSection(projectsRef)}>Projects</span>
              <span className="hover:text-white cursor-pointer" onClick={() => scrollToSection(servicesRef)}>Services</span>
              <span className="hover:text-white cursor-pointer" onClick={() => scrollToSection(contactRef)}>Contact Us</span>
            </div>
          </div>
          <div className="flex justify-between items-center w-full border-t-1 border-gray-txt/50 pt-4">
            <div className="flex justify-center items-end ">
            <span className="text-white/70 font-medium text-[11px] md:text-base tracking-wider font-sora">
              Website By <span className="md:pl-2 font-bold text-sm md:text-lg text-white/80 hover:text-white cursor-pointer">webzy studios</span>
            </span>
            </div>
            <div className="flex gap-1 md:gap-4">
              <a className="" href={"https://www.instagram.com/_aura.innn_"}><InstagramF /></a>
              <a href=""><LinkedInF /></a>
              <a href={`http://mailto:auradigitalservices25@gmail.com`}><GmailF /></a>
            </div>
          </div>
        </div>  
     
        </>
  )
};

export default Footer;


