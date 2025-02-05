import WhySectionCarousal from "../components/CardCarousal";



const WhyAura = ({ whySecRef }) => {
    return (
        <>
            <section id={whySecRef} className="w-full  border-white/20 flex flex-col gap-3 md:gap-5 md:pt-6">
                <Heading />
                <WhySectionCarousal />
            </section>
        </>
  )
};

const Heading = () => {
    return (
        <div className=" font-league flex flex-col items-center text-center md:mt-20 px-4 text-nowrap text-[28px] md:text-5xl font-medium " >
      <h2 className="text-white ">
        Reasons to Choose
        <span className="font-bold tracking-tight text-5xl md:text-7xl text-white pl-2 pr-1">aura</span> for
      </h2>
      <h3 className="text-gray-txt  mt-2">
        Your Digital Journey
      </h3>
      <p className=" text-p-txt text-xs md:text-lg mt-4 lg:px-40 xl:px-72  text-wrap">
        At Aura, we believe in transforming your brand through innovative
        strategies and creative excellence. Here’s why we’re the right choice
        for your business
      </p>
    </div>

    )
}
export default WhyAura;
