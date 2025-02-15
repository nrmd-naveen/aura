import { videos } from "../utils/resources";

const VideoCarousel = () => {
    return (
    <>
        <div className="relative w-full flex justify-center">
          <div className="opacity-0 md:opacity-100 absolute left-0 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0fab] w-[10%] h-full z-50 md:ml-5" ></div>
          <div className="opacity-0 md:opacity-100 absolute right-0 bg-gradient-to-r to-[#0f0f0f] via-[#0f0f0fab] w-[10%] h-full z-50 md:mr-5" ></div>
        <div className="h-auto w-[95%] overflow-hidden">
          <div className="min-h-72 w-full p-4 md:p-6 flex gap-6 animate-infinite-scroll md:animate-infinite-scroll-desk ">
              {[...videos, ...videos].map( (video, id) => <VideoCarouselItem video={video} id={id} />)}
          </div>   
        </div>
      </div>
    </>
  )
};

const VideoCarouselItem = ({ video, id }: { video: string, id: number }) => {
  return (
    <div id={id + ""} className= " h-[500px] min-w-[300px] bg-gray rounded-lg ">
      <video
        className="w-full h-full rounded-lg object-cover"
        muted
        loop
        autoPlay
        playsInline={true}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  )
}

export default VideoCarousel;

