import AURA from "./assets/svg/AURA_TEXT"
import Button from "./assets/ui/Button"
import GraphSVG from "./assets/svg/GraphSVG"
import HeroBG from "./assets/svg/HeroBG"
import VideoCarousel from "./assets/ui/VideoCarousel"


function App() {

  return (
    <>
      <div className="bg-primary">
        <div className="w-screen h-screen relative flex justify-center">
          <div className="h-screen w-screen overflow-hidden z-0 ">
            <HeroBG />
          </div>
          <div className="absolute top-[5%] z-10">
            <h1 className="h-auto font-league  text-[12rem] sm:text-[20rem]  lg:text-[35rem] leading-72 tracking-tighter font-bold text-white opacity-20">aura</h1>
            {/* <AURA opacity={0.2}  /> */}
            <div className="flex justify-center md:mt-40 gap-5 -z-40">
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
          
          <div className=" absolute z-20 bottom-[10%]">
            <GraphSVG />
          </div>
        </div>

        <div className="h-auto w-full">
          <VideoCarousel />
        </div>

      </div>
    </>
  )
}

export default App
