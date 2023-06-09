import styles from "./about.module.scss";
import { useState, useEffect, useRef } from "react";
import useIntersectionObserver from "@/utils/InterSectionObserver";
import axios from "axios";
import { API_URL } from "@/shared/constants";

function VideoSection() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const vdRef = useRef<HTMLVideoElement>(null);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.pageYOffset;
      setScrollPosition(scroll);
      if (!vdRef.current) {
        return;
      }
      if (scroll - 20 < 0) {
        vdRef.current.currentTime = 0;
      }
      window.pageYOffset < 3000
        ? vdRef.current?.play()
        : vdRef.current?.pause();
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={styles.video}
      style={{ clipPath: `circle(${scrollPosition / 10}% at 65% 55%)` }}
      ref={ref}
    >
      {/* <video src="public/media/site.mp4" controls></video> */}
      <video loop muted playsInline ref={vdRef}>
        <source
          // src="https://ideallux-space.nyc3.digitaloceanspaces.com/IMG_0115.MP4"
          src="https://the-doors.herokuapp.com/api/files/35"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default VideoSection;
