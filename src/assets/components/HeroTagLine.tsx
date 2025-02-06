import { useScreenWidth } from "../../ContextProviders/ScreenWidthContext";

const HeroTagLine = () => {

    const width = useScreenWidth()
    return (
        <div className="flex flex-col gap-6 justify-center items-center px-4 mt-20 md:mt-16 z-40">
            
            <p className="text-white font-barlow sm:txt-2xl md:text-2xl">
            Innovative Digital Solutions to Ignite Growth
          </p>

          <div className="min-h-16 min-w-40 font-barlow p-2 px-4  flex jutisfy-between items-center  bg-gray-txt/10 backdrop-blur-lg border-2 border-white/10 shadow-md rounded-lg whitespace-nowrap">
            
            {width > 600 ? (<p className="text-p-txt text-sm md:text-base">
              For
              <SpanTag tag={"StartUps"} />
              , <SpanTag tag={"Creators"} />
              , <SpanTag tag={"Entrepreneurs"} />
              and <SpanTag tag={"Media & Publishers"} />
            </p>) :
              width > 400 ? (<p className="text-p-txt text-sm md:text-base">
              For
              <SpanTag tag={"StartUps"} />
              , <SpanTag tag={"Creators"} />
              and <SpanTag tag={"Entrepreneurs"} />
              </p>) :
                (<p className="text-p-txt text-sm md:text-base">
              For
              <SpanTag tag={"Creators"} />
              and <SpanTag tag={"Entrepreneurs"} />
            </p>)
            }
          </div>
        </div>
  )
};

const SpanTag = ({ tag } : { tag: string}) => {
  
  return (
    <span 
      className="p-2 text-white bg-gray rounded-md m-1 md:m-2"
    >{tag}</span>
    
  )
}

export default HeroTagLine;
