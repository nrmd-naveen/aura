import React from "react";
import { testiData } from "../utils/config";

const Testimonials = ({ testiRef }) => {
    return <>
        <section id="testimonials" ref={testiRef} className="my-20 md:my-40">
            <Heading />
            <div className="flex gap-2 mt-10 p-4 animate-infinite-scroll md:animate-infinite-scroll-desk ">
                {testiData.map((data, index) => (
                    <TestiCard key={index} props={data} />
                ))}
            </div>
        </section>
    </>
};


const Heading = () => {
    return (
        <div className=" font-sora flex flex-col md:gap-2 items-center text-center mt-20 px-4 text-nowrap text-[28px] md:text-5xl font-medium " >
        <div>
            <span className="text-gray-txt ">
                Our
            </span>
        <span className="text-white pl-2">
                Testimonials
            </span>
        </div>
      <p className=" text-p-txt text-xs md:text-lg mt-4 lg:px-40 xl:px-72  text-wrap">
       Don’t Just Take Our Word for It – Hear from the Clients Who’ve Thrived with Aura. We’re proud to foster lasting partnerships and deliver outstanding results that make a real impact
      </p>
    </div>

    )
}


const TestiCard = ({
    props, key
}: {
        props: {
            icon: React.ReactNode,
            review: string,
            name: string,
            company: string
        },
        key: number
}) => {
    
    return (
        <>
            <div key={key} className="flex flex-col gap-3 font-sora ">
                    <div className="flex flex-col gap-6 h-56 w-92 bg-gradient-to-b from-black/50 to-transparent rounded-2xl border border-gray p-8">
                        {props.icon}
                        <p className=" text-white font-light text-sm md:text-base">
                            {props.review}
                        </p>
                    </div>
                        
                    <div className="pl-13  flex flex-col ">
                        <h2 className="text-white">{props.name}</h2>
                        <p className=" text-p-txt font-light text-base md:text-lg">
                            {props.company}</p>
                    </div>
                </div>
        </>
    )
}

export default Testimonials;
