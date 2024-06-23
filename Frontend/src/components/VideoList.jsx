// src/components/VideoList.js
import React from "react";

const VideoList = ({ selectedVideoUrl }) => {
  return (
    <div className="video-list">
      {selectedVideoUrl ? (
        <div className="video-item mb-6">
          <iframe
            width="560"
            height="315"
            src={selectedVideoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Selected Video"
            className="w-full"
          ></iframe>
        </div>
      ) : (
        <div className="text-center text-gray-500">Select a video to watch</div>
      )}
    </div>
  );
};

export default VideoList;
