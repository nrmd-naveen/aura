import React from "react";
import { BulbIcon, RightArrow } from "../svg/Icons";
import Button from "../ui/Button";
import { cardData } from "../utils/config";
import WhySectionCarousal from "../components/CardCarousal";



const WhyAura = () => {
    return (
        <>
            <div className="w-full border-t-[0.5px] border-white/20 flex flex-col gap-3 md:gap-5  pt-6">
                <Heading />
                <WhySectionCarousal />
            </div>
            <div className="h-screen"></div>
        </>
  )
};

const Heading = () => {
    return (
        <div className=" font-league flex flex-col items-center text-center mt-20 px-4 text-nowrap text-[28px] md:text-5xl font-medium " >
      <h2 className="text-white ">
        Reasons to Choose
        <span className="font-bold tracking-tight text-5xl md:text-7xl text-white pl-2 pr-1">aura</span> for
      </h2>
      <h3 className="text-gray-txt  mt-2">
        Your Digital Journey
      </h3>
      <p className=" text-p-txt text-base md:text-lg mt-4 lg:px-40 xl:px-72  text-wrap">
        At Aura, we believe in transforming your brand through innovative
        strategies and creative excellence. Here’s why we’re the right choice
        for your business
      </p>
    </div>

    )
}
const Card = ( {props} ) => {
    return (
        <div key={props.title} className="min-h-52 h-90 w-80 md:max-w-96 bg-white/5 rounded-lg p-4 py-8 flex flex-col gap-8 items-center justify-center" >
            <Icon icon={props.icon} />
            <div className="w-80 text-center">
                <h2 className="font-sora text-sm md:text-lg text-white text-nowrap">
                    {props.title}
                </h2>
                <p className="px-2 text-p-txt text-sm md:text-md mt-2 md:mt-4">
                    {props.paragraph}
                </p>
            </div>
            <Button
                className="rounded-b-3xl pl-6 rounded-t-3xl inset-ring-[0.5px]"
                variant="outline"
                text="learn more"
                icon={<RightArrow />}
                onClick={()=> alert("clicked")}
            />
        </div>
    )
}
const Icon = ({icon}) => {
    
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
export default WhyAura;
