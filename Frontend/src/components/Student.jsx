// src/components/StudentDashboard.js
import React, { useState } from "react";
import VideoList from "./VideoList";
import './StudentDashboard.css';

const StudentDashboard = () => {
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);
  const [expandedVideoId, setExpandedVideoId] = useState(null);

  const videos = [
    {
      id: 1,
      title: 'Introduction to English Grammar',
      parts: [
        { id: 1, title: 'Part 1', url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_1_PART_1' },
        { id: 2, title: 'Part 2', url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_1_PART_2' },
      ],
    },
    {
      id: 2,
      title: 'Advanced English Speaking Techniques',
      parts: [
        { id: 1, title: 'Part 1', url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_2_PART_1' },
        { id: 2, title: 'Part 2', url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_2_PART_2' },
      ],
    },
    {
      id: 3,
      title: 'Mastering Verbs and Tenses',
      parts: [
        { id: 1, title: 'Part 1', url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_3_PART_1' },
        { id: 2, title: 'Part 2', url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_3_PART_2' },
      ],
    },
    {
      id: 4,
      title: 'Effective Writing Skills',
      parts: [
        { id: 1, title: 'Part 1', url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_4_PART_1' },
        { id: 2, title: 'Part 2', url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_4_PART_2' },
      ],
    },
    {
      id: 5,
      title: 'Reading Comprehension Strategies',
      parts: [
        { id: 1, title: 'Part 1', url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_5_PART_1' },
        { id: 2, title: 'Part 2', url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_5_PART_2' },
      ],
    },
    {
      id: 6,
      title: 'Listening Skills Development',
      parts: [
        { id: 1, title: 'Part 1', url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_6_PART_1' },
        { id: 2, title: 'Part 2', url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_6_PART_2' },
      ],
    },
    {
      id: 7,
      title: 'Grammar in Context: Real-life Examples',
      parts: [
        { id: 1, title: 'Part 1', url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_7_PART_1' },
        { id: 2, title: 'Part 2', url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_7_PART_2' },
      ],
    },
    {
      id: 8,
      title: 'Vocabulary Expansion Techniques',
      parts: [
        { id: 1, title: 'Part 1', url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_8_PART_1' },
        { id: 2, title: 'Part 2', url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_8_PART_2' },
      ],
    },
    {
      id: 9,
      title: 'Pronunciation Mastery',
      parts: [
        { id: 1, title: 'Part 1', url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_9_PART_1' },
        { id: 2, title: 'Part 2', url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_9_PART_2' },
      ],
    },
    {
      id: 10,
      title: 'Writing Essays: Tips and Tricks',
      parts: [
        { id: 1, title: 'Part 1', url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_10_PART_1' },
        { id: 2, title: 'Part 2', url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_10_PART_2' },
      ],
    },
  ];

  const handleSelectVideo = (videoUrl) => {
    setSelectedVideoUrl(videoUrl);
  };

  const toggleSubMenu = (videoId) => {
    if (expandedVideoId === videoId) {
      setExpandedVideoId(null);
    } else {
      setExpandedVideoId(videoId);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-64 h-full bg-gray-800 text-white flex flex-col">
        <div className="flex items-center justify-center h-20 border-b border-gray-700">
          <h1 className="text-2xl font-bold">VKY Classes</h1>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          {videos.map((video) => (
            <div key={video.id} className="mb-4">
              <div
                className={`flex items-center p-2 cursor-pointer hover:bg-gray-700`}
                onClick={() => toggleSubMenu(video.id)}
              >
                <span className="text-lg font-semibold">{video.title}</span>
              </div>
              {expandedVideoId === video.id && (
                <div className="pl-4">
                  {video.parts.map((part) => (
                    <div
                      key={part.id}
                      className={`flex items-center p-2 mb-2 cursor-pointer hover:bg-gray-700`}
                      onClick={() => handleSelectVideo(part.url)}
                    >
                      <span className="text-sm">{part.title}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-gray-700">
          <button
            className="w-full flex items-center p-2 text-left hover:bg-gray-700"
            onClick={() => handleSelectVideo(null)}
          >
            <span className="text-lg font-semibold">Clear Selection</span>
          </button>
        </div>
      </div>
      <div className="flex-1 max-w-screen-2xl container mx-auto md:px-20 px-4 my-10">
        <div className="space-y-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            Welcome to <span className="text-pink-500">VKY Classes</span>
          </h1>
          <p className="text-sm md:text-xl">
            Enrich yourself with our exclusive English and Grammar lessons.
          </p>
        </div>
        <VideoList selectedVideoUrl={selectedVideoUrl} />
      </div>
    </div>
  );
};

export default StudentDashboard;
