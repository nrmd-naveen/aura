import React from "react";
import { MobileIcon } from "../svg/Icons";
import { servicesData } from "../utils/config";
import BgBlur from "../svg/BgBlur";
import { motion, useScroll, useTransform } from "framer-motion";



const Services = ({ servicesRef }) => {
    const { scrollY } = useScroll();
    let y = useTransform(scrollY, [2600, 3400], ["0%", "50%"]);
    return (
        <>
            <section ref={servicesRef} id="services" className="relative h-full flex flex-col gap-8 md:gap-16 items-center justify-center" >
                <Heading />
                <motion.div className="h-full w-full">
{/* 
                    <motion.div style={{y}} className="absolute -top-10 md:top-90 -left-25 md:-left-180 rotate-[20deg]">
                        <BgBlur />
                    </motion.div> */}
                    <motion.div style={{y}} className="absolute -top-40 md:-top-90 -right-260 md:-right-180">
                        <BgBlur />
                    </motion.div>
                </motion.div> 
                <div className="flex flex-wrap justify-center items-center">
                {
                    servicesData.map( (service , ind) => <ServiceCard key={ind} data={service} />)
                }
                </div>
            </section>
        </>
  )
};

const Heading = () => {
    return (
        <div className=" font-sora flex flex-col md:gap-2 items-center text-center mt-20 px-4 text-nowrap text-[28px] md:text-5xl font-medium " >
        <div>
            <span className="text-gray-txt ">
                Our
            </span>
        <span className="text-white pl-2">
                Services
            </span>
        </div>
      <p className=" text-p-txt text-xs md:text-lg mt-4 lg:px-40 xl:px-72  text-wrap">
       Our comprehensive range of services includes web design, mobile app development, SEO, social media marketing, and more. Whether you're a startup or an established enterprise, our experts will craft solutions that drive results.
      </p>
    </div>

    )
}

const ServiceCard = ({data, key}) => {
    
    return (
        <div key={key} className="relative h-60 max-w-80 w-[45%] m-[2.5%] border-1 border-gray bg-white/2 backdrop-blur-xl shadow-[inset_-12px_-8px_40px_#46464620] hover:shadow-[0px_1px_2px_rgba(100,_100,_100,_1),_0_10px_20px_rgba(204,_204,_204,_0.3)] rounded-lg mt-20 cursor-pointer">
            <div className="absolute  left-[30%] sm:left-[37%] -top-11">
                <ServiceIcon icon={data.icon} />
            </div>
                <div className=" flex flex-col gap-4 mt-4 p-3 md:p-6 ">
                    <h2 className="mt-3 font-sora text-sm md:text-lg text-center text-white text-wrap ">
                    {data.title}
                </h2>
                <p className="absolute top-25 md:pr-2 text-p-txt text-xs md:text-base text-wrap">
                    {data.paragraph}
                </p>
                </div>
        </div>
    )
}

const ServiceIcon = ({ icon }: {icon: React.ReactNode}) => {

    return (
        <div className="h-20 w-20 p-[0.1%] border-gradient rounded-full ">
                <div className="h-full w-full p-2  bg-gradient-to-b to-transparent via-black/30  from-black rounded-full">
                    <div className="h-full w-full p-[0.1%] border-gradient rounded-full">
                    <div className="h-full w-full p-2 bg-gradient-to-b to-transparent via-black/40 from-black rounded-full flex justify-center items-center ">
                        {icon}
                    </div>
                    </div>
                </div>
            </div>
    )
}
export default Services;


// <div className="h-56 w-52 bg-">
//             <div className="h-20 w-20 p-2 bg-gradient-to-t to-[#1A1A1A] rounded-full border border-[#333333]">
//                 <div className="h-full w-full p-2 bg-transparent rounded-full border border-[#333333]">
//                     {/* <div className="border-gradient rounded-full h-full w-full"> */}

//                     <div className="h-full w-full flex justify-center items-center bg-transparent rounded-full border border-[#333333]">
//                         <MobileIcon />
                        
//                     {/* </div> */}
//                     </div>
//                 </div>
//             </div>
//         </div>