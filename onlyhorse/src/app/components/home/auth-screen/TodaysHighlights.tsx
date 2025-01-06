"use client";

import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

const TodaysHighlights = () => {
  return (
    <div className="w-full md:w-3/4 mx-auto">
      <CldVideoPlayer
        width="960"
        height="540"
        className="rounded-md"
        src="highlighted-vid_jd8rfj"
      />
    </div>
  );
};

export default TodaysHighlights;
