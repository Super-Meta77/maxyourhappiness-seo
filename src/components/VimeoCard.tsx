import React, { useState } from 'react';

interface VimeoCardProps {
  thumbnail: string;
  videoId: string;
  title: string;
}

const VimeoCard: React.FC<VimeoCardProps> = ({ thumbnail, videoId, title }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlay = () => {
    setIsPlaying(false);
  };

  return (
    <div className="w-full max-w-2xl relative">
      {isPlaying ? (
        <div className="relative h-[600px] w-full overflow-hidden">
            <img
                src={thumbnail}
                alt="Video Thumbnail"
                className="h-full w-full object-contain cursor-pointer"
                data-video-id="992060811"
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
        // <iframe
        //     src="https://player.vimeo.com/video/1064104510?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        //     frameBorder="0"
        //     allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        //     style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}}
        //     title="Have any of these happened to you?"/>
        <iframe
            src={`https://player.vimeo.com/video/${videoId}?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
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
