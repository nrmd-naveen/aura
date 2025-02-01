import { videos } from "../utils/resources";

const VideoCarousel = () => {
    return (
    <>
      <div className="min-h-72 w-full p-4 md:p-6 flex gap-6 animate-infinite-scroll overflow-hi">
          {[...videos, ...videos].map( (video, id) => <VideoCarouselItem video={video} id={id} />)}
      </div>   
    </>
  )
};

const VideoCarouselItem = ({ video, id }: { video: string, id: number }) => {
  return (
    <div id={id + ""} className= " h-[500px] min-w-[300px] ">
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
