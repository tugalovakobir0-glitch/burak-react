import React from "react";

export default function Advertisement() {
  return (
    <div className="add-restaurant-frame">
      <video
        className="ads-video"
        autoPlay={true}
        loop
        muted
        playsInline
        data-vidio-media=""
      >
        <source type="video/mp4" src="video/burak-ads.mp4" />
      </video>
    </div>
  );
}
