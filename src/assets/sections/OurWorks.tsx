
import VideoCarousel from "../components/VideoCarousel";

const OurWorks = ({ projectsRef }: { projectsRef: React.RefObject<HTMLInputElement> }) => {
  return <>
          <section id="ourWorks" ref={projectsRef} className="my-20 md:my-40">
              <Heading />
              <div className="mt-10 md:mt-15">
                <VideoCarousel />
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
                Works
            </span>
        </div>
      <p className=" text-p-txt text-xs md:text-lg mt-4 lg:px-40 xl:px-72  text-wrap px-2">
       At Aura Digital Services, we pride ourselves on transforming ideas into impactful results. From creative designs to strategic campaigns, our portfolio showcases how we’ve helped businesses grow, engage, and thrive in the digital world
      </p>
        </div>
        
    )
}

export default OurWorks;
