import { motion, useScroll, useTransform } from "framer-motion";
import HeaderHeadings from "../components/HeaderTexts";
import HeroTagLine from "../components/HeroTagLine";
import GraphSVG from "../svg/GraphSVG";
import Button from "../ui/Button";
import NavBar from "../ui/NavBar";

const HeroSection = () => {

    const { scrollY } = useScroll()
    let y = useTransform(scrollY, [0,800], ["0%", "20%"])
    return (
        <>
        <div className="w-screen h-screen relative overflow-hidden bg-primary">    
            <motion.div style={{ y }} className=" flex items-center justify-center absolute z-0 md:right-20 -right-110 md:bottom-0 bottom-[23%] ">
                <GraphSVG />
            </motion.div>
            <NavBar />
            <HeaderHeadings />
            <HeroTagLine />
            <div className="flex justify-center gap-5 mt-8">
            <Button
            variant="primary"
            text="Get Started"
            onClick={() => alert("Get Started")}
            />
            <Button
            variant="secondary"
            text="Our Works"
            onClick={() => alert("Our Works")}
            />
            </div>
        </div>
        </>
  )
};

export default HeroSection;
