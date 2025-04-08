import React, { useState } from 'react';

interface VimeoCardProps {
  thumbnail: string;
  videoId: string;
  title: string;
}

const VimeoCard: React.FC<VimeoCardProps> = ({ thumbnail, videoId, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="w-full max-w-2xl relative">
      {!isPlaying ? (
        <div className="relative h-[600px] w-full overflow-hidden" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <img
                src={thumbnail}
                alt={title}
                className="h-full w-full object-contain cursor-pointer"
                style={{width: "auto",height: "100%"}}
                onClick={handlePlay}
            />
            <button className="play-button" onClick={handlePlay}>
                <img
                    src="images/play.png"
                    alt="Play Icon"
                    className="h-full w-full object-contain cursor-pointer"
                    style={{ width: "28px", height: "28px"}}
                />
            </button>
        </div>
      ) : (
        <iframe
            src={`https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&dnt=1&loop=1&autopause=0&byline=0&portrait=0&title=0&badge=0&endscreen=0;app_id=58479`}
            width="100%"
            height="600"
            className="w-full"
            title={title}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowFullScreen
        />
      )}
    </div>
  );
};

export default VimeoCard;
