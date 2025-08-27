import React, { useState, useRef } from "react";

interface VimeoCardProps {
  thumbnail: string;
  videoId: string;
  title: string;
}

const VimeoCard: React.FC<VimeoCardProps> = ({ thumbnail, videoId, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);

    // On mobile, this ensures the click counts as a user gesture
    if (iframeRef.current) {
      iframeRef.current.focus();
    }
  };

  return (
    <div className="w-full max-w-2xl relative">
      {!isPlaying ? (
        <div className="relative h-[600px] w-full overflow-hidden flex justify-center items-center">
          <img
            src={thumbnail}
            alt="Video Thumbnail"
            className="h-full w-full object-contain cursor-pointer"
            onClick={handlePlay}
          />
          <button
            className="play-button absolute z-10"
            onClick={handlePlay}
            style={{ width: "50px", height: "50px" }}
          >
            ►
          </button>
        </div>
      ) : (
        <div className="relative w-full h-[600px]">
          <iframe
            ref={iframeRef}
            src={`https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&autopause=0&byline=0&portrait=0&title=0&badge=0&endscreen=0`}
            width="100%"
            height="600"
            title={title}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      )}
    </div>
  );
};

export default VimeoCard;
