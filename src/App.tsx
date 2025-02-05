import CardCarousel from "./assets/components/CardCarousal"
import HeroSection from "./assets/sections/HeroSection"
import OurWorks from "./assets/sections/OurWorks"
import Testimonials from "./assets/sections/Testimonials"
import WhyAura from "./assets/sections/WhyAura"
import VideoCarousel from "./assets/components/VideoCarousel"
import ContactForm from "./assets/components/FormComponent"


function App() {

  return (
    <>
      <div className="w-screen relative overflow-hidden bg-primary">
        {/* <HeroSection /> */}
        
        {/* <ContactForm /> */}

        <HeroSection />
        <WhyAura />
        <OurWorks />
        <Testimonials />
        
      </div>
    
    </>
  )
  
}

export default App




// return (
//     <>
//       <div className="w-screen h-auto  bg-primary overflow-hidden">
//         <NavBar />
//         {/* <NavBar2 /> */}
//         <div className=" relative flex justify-center">
//           <div className="h-screen w-screen overflow-hidden z-0 ">
//             <HeroBG />
//           </div>
//           <div className="absolute top-[5%] z-10">
//             <h1 className="h-auto font-league  text-[12rem] sm:text-[20rem]  lg:text-[35rem] leading-72 tracking-tighter font-bold text-white opacity-20">aura</h1>
//             {/* <AURA opacity={0.2}  /> */}
//             <div className="flex justify-center md:mt-40 gap-5 -z-40">
//               <Button
//                 variant="primary"
//                 text="Get Started"
//                 onClick={() => alert("Get Started")}
//                 />
//               <Button
//                 variant="secondary"
//                 text="Our Works"
//                 onClick={() => alert("Our Works")}
//                 />
//               </div>
//           </div>
          
//           <div className=" absolute z-20 bottom-[10%]">
//             <GraphSVG />
//           </div>
//         </div>

//         <div className="h-32"></div>
//         <VideoCarousel />
        
//         <div className="h-72"></div>
//       </div>
//     </>
//   )