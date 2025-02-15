import { motion } from "framer-motion";
import HeaderHeadings from "../components/HeaderTexts";
import HeroTagLine from "../components/HeroTagLine";
import GraphSVG from "../svg/GraphSVG";
import Button from "../ui/Button";
import FloatingIcons from "../components/heroelements";

const HeroSection = (
  {
    heroRef,
    projectsRef,
    contactRef,
    scrollToSection
  }: {
    heroRef : React.RefObject<HTMLInputElement> 
    projectsRef: React.RefObject<HTMLInputElement> 
    contactRef: React.RefObject<HTMLInputElement> 
    scrollToSection: (refSection: React.RefObject<HTMLInputElement>) => void
  }
) => {
  // const { scrollY } = useScroll();
  // let y = useTransform(scrollY, [0, 800], ["0%", "20%"]);
  return (
    <>
      <section id="heroSection" ref={heroRef}>
        <div className="absolute z-40 w-screen ">
          <FloatingIcons />
        </div>
        <div className="w-screen h-screen relative overflow-hidden bg-primary">
          <motion.div
            style={{  }}
            className=" flex items-center justify-center absolute z-0 md:right-20 -right-110 md:bottom-0 bottom-[23%] "
          >
            <GraphSVG />
          </motion.div>

          <HeaderHeadings />
          <HeroTagLine />
          <div className="flex justify-center gap-5 md:gap-10 mt-10">
            <Button
              variant="primary"
              text="Get Started"
              onClick={() => scrollToSection(contactRef)}
            />
            <Button
              variant="secondary"
              text="Our Works"
              onClick={() => scrollToSection(projectsRef)}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
