import { useRef } from "react";
import { Video } from "../styles/styledComponents";
import videoSource from "../assets/videos/galaxy-background.mp4";

const Background = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const handleVideo = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  };

  return (
    <>
      <Video
        autoPlay={true}
        loop={true}
        muted
        controls={false}
        playsInline
        ref={videoRef}
        onPlay={handleVideo}
      >
        <source src={videoSource} type="video/mp4"></source>
      </Video>
    </>
  );
};

export default Background;
