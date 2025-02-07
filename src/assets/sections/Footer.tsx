
import { GmailF, InstagramF, LinkedInF } from "../svg/Icons";
import LogoSVG from "../svg/LogoSVG";

const Footer = ({ heroRef, projectsRef, contactRef, servicesRef, scrollToSection}) => {
    return (
        <>
        <div className="flex flex-col gap-8 justify-center items-center py-6 bg-gradient-to-b to-[#383838] rounded-t-xl px-4 md:px-20 mt-40">
          <div className="flex justify-between items-center w-full md:px-20">
            <span  className="hover:scale-110 cursor-pointer" onClick={() => scrollToSection(heroRef)}>
            <LogoSVG />
            </span>
            <div className="flex flex-col gap-1 text-white/80 md:font-medium tracking-wider font-sora">
              <span className="hover:text-white cursor-pointer" onClick={() => scrollToSection(projectsRef)}>Our Works</span>
              <span className="hover:text-white cursor-pointer" onClick={() => scrollToSection(servicesRef)}>Our Services</span>
              <span className="hover:text-white cursor-pointer" onClick={() => scrollToSection(contactRef)}>Contact Us</span>
            </div>
          </div>
          <div className="flex justify-between items-center w-full border-t-1 border-gray-txt/50 pt-4">
            <div>
            <span className="text-white/80 font-medium tracking-wider font-sora">
              Website By
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
