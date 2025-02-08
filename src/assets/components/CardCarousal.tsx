import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import { LeftArrow, RightArrow } from "../svg/Icons";
import { cardData, scrollToSection } from "../utils/config";


export default function WhySectionCarousal({ projectsRef }:{ projectsRef: React.RefObject<HTMLInputElement> }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cardData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getPosition = (idx: number) => {
    if (idx === index) return "z-10 scale-110";
    if (idx === (index + 1) % cardData.length) return "z-0 scale-90 translate-x-70 md:translate-x-90 opacity-80";
    if (idx === (index - 1 + cardData.length) % cardData.length) return "z-0 scale-90 md:-translate-x-90 -translate-x-70  opacity-80";
    return "z-0 scale-75 opacity-50";
  };

    return (
      <>
      <div className="relative flex justify-center items-center h-96 mt-12 ">
    <div className="flex flex-col items-center justify-center h-full  w-full  overflow-hidden">
      <AnimatePresence>
        {cardData.map((card, idx) => (
            <motion.div
            key={idx}
            className={`absolute  rounded-xl shadow-lg transition-all duration-500 ease-in-out ${getPosition(idx)}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
              
                <Card props={card} key={idx} projectsRef={projectsRef}/> 
          </motion.div>
        ))}
      </AnimatePresence>
        </div>
        </div>
        <div className="flex justify-center items-center gap-8 md:pt-6 ">
          <button
            onClick={() => setIndex((prev) => (prev - 1 + cardData.length) % cardData.length)}
            className="p-5 cursor-pointer bg-transparent px-8 shadow-[inset_-1px_-1px_30px_#676767] rounded-full text-white opacity-80 hover:opacity-100"
          >
            <LeftArrow />
          </button>
          
          <button
            onClick={() => setIndex((prev) => (prev + 1) % cardData.length)}
            className="p-5 cursor-pointer bg-transparent px-8 shadow-[inset_-1px_-1px_30px_#676767] rounded-full text-white opacity-80 hover:opacity-100"
          >
            <RightArrow />
          </button>

      </div>
        
      </>
  );
}


const Card = ({
  props, projectsRef
}: {
    props: {
      icon: React.ReactNode,
      title: string,
      paragraph: string
      },
    projectsRef: any
} ) => {
    return (
        <div key={props.title} className="min-h-52 h-80 md:h-90 w-64 md:w-80 bg-primary/20 border border-gray backdrop-blur-3xl rounded-lg p-4 py-8 flex flex-col gap-8 items-center justify-center" >
            <Icon icon={props.icon} />
            <div className="w-80 text-center">
                <h2 className="font-sora text-sm md:text-lg text-white text-nowrap">
                    {props.title}
                </h2>
                <p className=" px-10 text-p-txt text-xs md:text-md mt-2 md:mt-4">
                    {props.paragraph}
                </p>
            </div>
            <Button
                className="rounded-b-3xl pl-6 rounded-t-3xl inset-ring-[0.5px] cursor-pointer"
                variant="outline"
                text="learn more"
                href="#testimonials"
                icon={<RightArrow />}
                onClick={()=> scrollToSection(projectsRef)}
            />
        </div>
    )
}
const Icon = ({icon } : { icon: React.ReactNode}) => {
    
    return (
        <>
            <div className="flex justify-center items-center h-15 w-15 border-5 border-[#4D4D4D] rounded-full shadow-inner shadow-inner-left">
                <span >
                    {icon}
                </span>
            </div>
        </>
    )
}
