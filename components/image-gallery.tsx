"use client";
import React, { useState, useRef } from "react";

interface GalleryVideo {
  video?: string;
  name?: string;
}

const ImageGallery = ({ videos }: { videos: GalleryVideo[] }) => {
  console.log("client: ", videos);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const [playingVideos, setPlayingVideos] = useState<Set<string>>(new Set());
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const handleVideoClick = (videoSrc: string) => {
    const videoElement = videoRefs.current[videoSrc];
    if (!videoElement) return;

    if (videoElement.paused) {
      videoElement.play();
      setPlayingVideos((prev) => new Set(prev).add(videoSrc));
    } else {
      videoElement.pause();
      setPlayingVideos((prev) => {
        const newSet = new Set(prev);
        newSet.delete(videoSrc);
        return newSet;
      });
    }
  };

  const handleVideoEnded = (videoSrc: string) => {
    setPlayingVideos((prev) => {
      const newSet = new Set(prev);
      newSet.delete(videoSrc);
      return newSet;
    });
  };

  const MAX_COLUMNS = 3;

  function getColumns(colIndex: number) {
    return videos.filter(
      (video: GalleryVideo, idx: number) => idx % MAX_COLUMNS === colIndex
    );
  }

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:gap-4">
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
        (column, idx) => (
          <div key={idx} className="flex flex-col gap-4 lg:gap-4">
            {column.map(
              (video: GalleryVideo, index: React.Key | null | undefined) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-md shadow-md group"
                  onMouseEnter={() => setHoveredVideo(video.video || "")}
                  onMouseLeave={() => setHoveredVideo(null)}
                >
                  <video
                    ref={(el) => {
                      if (video.video) {
                        videoRefs.current[video.video] = el;
                      }
                    }}
                    className="w-full h-auto rounded-md cursor-pointer lg:rounded-lg"
                    src={video.video}
                    muted
                    onEnded={() => video.video && handleVideoEnded(video.video)}
                  />
                  {/* Custom play/pause button overlay */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center  transition-opacity duration-300 ${
                      hoveredVideo === video.video ? "opacity-100" : "opacity-0"
                    }`}
                    onClick={() => video.video && handleVideoClick(video.video)}
                  >
                    <div className="w-16 h-16 cursor-pointer bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg">
                      {playingVideos.has(video.video || "") ? (
                        // Pause icon
                        <svg
                          className="w-8 h-8 text-gray-800"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        </svg>
                      ) : (
                        // Play icon
                        <svg
                          className="w-8 h-8 text-gray-800 ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </div>
                  </div>
                  {/* Fullscreen modal can be re-added here if needed */}
                </div>
              )
            )}
          </div>
        )
      )}
    </div>
  );
};

export default ImageGallery;
