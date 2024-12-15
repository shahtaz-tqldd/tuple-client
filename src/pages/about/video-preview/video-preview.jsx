import React, { useRef, useState } from "react";
import video from "@/assets/images/video.mp4";
import { PlayCircle } from "lucide-react";
const VideoPreview = () => {
  const videoRef = useRef(null);
  return (
    <div className="content mb-20">
      <h2
        // ref={(el) => (aboutTitleRefs.current[0] = el)}
        className="mt-6 lg:text-5xl text-3xl lg:font-normal font-bold text-center text-black/80"
      >
        Discover the{" "}
        <span className="font-semibold text-black">Difference</span> with us
      </h2>
      <h2
        // ref={(el) => (aboutTitleRefs.current[1] = el)}
        className="mt-6 lg:text-xl text-sm text-center text-black/40"
      >
        Every property has{" "}
        <span className="text-primary font-semibold">a story,</span> and every{" "}
        <span className="text-primary font-semibold"> client matters.</span>
      </h2>

      <div ref={videoRef} className="mt-10 flex justify-center">
        <VideoPlayer videoSrc={video} />
      </div>
    </div>
  );
};

export default VideoPreview;

export const VideoPlayer = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative w-full max-w-[920px] mx-auto rounded-3xl overflow-hidden">
      <video
        ref={videoRef}
        src={videoSrc}
        className="w-full"
        controls={isPlaying}
      >
        Your browser does not support the video tag.
      </video>
      {!isPlaying && (
        <div
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/10 cursor-pointer hover:bg-black/20 tr"
        >
          <PlayCircle
            strokeWidth={0.5}
            className="text-white w-20 h-20 hover:scale-110 tr"
          />
        </div>
      )}
    </div>
  );
};
