import React, { useState } from 'react';

interface VimeoCardProps {
  thumbnail: string;
  videoId: string;
  title: string;
}

const VimeoCard: React.FC<VimeoCardProps> = ({ thumbnail, videoId, title }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlay = () => {
    setIsPlaying(false);
  };

  const handleUnmute = () => {
    setIsMuted(false);
  };

  return (
    <div className="w-full max-w-2xl relative">
      {isPlaying ? (
        <div className="relative h-[600px] w-full overflow-hidden" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <img
                src={thumbnail}
                alt="Video Thumbnail"
                className="h-full w-full object-contain cursor-pointer"
                data-video-id="992060811"
                style={{width: "auto",height: "100%"}}
                onClick={handlePlay}
            />
            <button className="play-button" onClick={handlePlay} data-video-id="992060811" value="992060811">
                <img
                    src="images/play.png"
                    alt="Video Thumbnail"
                    className="h-full w-full object-contain cursor-pointer"
                    data-video-id="998466373"
                    style={{ width: "28px", height: "28px"}}
                />
            </button>
        </div>
      ) : (
        <div className="relative w-full h-[600px]">
          <iframe
              src={`https://player.vimeo.com/video/${videoId}?autoplay=1&muted=${isMuted ? 1 : 0}&dnt=1&loop=1&autopause=0&byline=0&portrait=0&title=0&badge=0&endscreen=0;app_id=58479`}
              width="100%"
              height="600"
              className="w-full"
              title={title}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              allowFullScreen
          />

          {isMuted && (
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 z-10">
              <button
                onClick={handleUnmute}
                className="px-6 py-3 bg-white text-black text-lg font-semibold rounded shadow hover:bg-gray-100 transition"
              >
                🔊 Tap to Unmute
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VimeoCard;
