import { AiFillPlayCircle } from "react-icons/ai";
import styles from "./video.module.scss";
import { useEffect, useRef, useState } from "react";
import { log } from "console";
import Link from "next/link";

function Video({ src }: { src: string }) {
  const [play, setPlay] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (!videoRef) return;

    play ? videoRef?.current?.play() : videoRef?.current?.pause();
  }, [play]);

  return (
    <div className={styles.video} onClick={() => setPlay(!play)}>
      <video autoPlay loop muted ref={videoRef}>
        <source src={src} type="video/mp4" />{" "}
      </video>{" "}
      {play ? (
        ""
      ) : (
        <>
          <AiFillPlayCircle size={50} /> <Link href="/">Request a call</Link>
        </>
      )}
    </div>
  );
}

export default Video;
