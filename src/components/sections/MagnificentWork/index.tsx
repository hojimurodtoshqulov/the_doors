import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { AiOutlineLike } from "react-icons/ai";
import image1 from "../../../../public/media/Rectangle 6959.png";
import image2 from "../../../../public/media/Rectangle 6960 (1).png";
import image3 from "../../../../public/media/Rectangle 6961.png";
import VanillaTilt from "vanilla-tilt";
import useIntersectionObserver from "@/utils/InterSectionObserver";
import axios from "axios";
import { useTarjima } from "@/utils/getContent";

function MagnificentWork() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref = useRef(null);
  const getContent = useTarjima();
  const entity = useIntersectionObserver(ref, { rootMargin: "-20% 0px" });
  const [about, setAbout] = useState<
    | {
        contentIds: [number, number, number];
        titleUz: string;
        titleRu: string;
        descriptionRu: string;
        descriptionUz: string;
        created: number;
        done: number;
      }
    | undefined
  >();
  useEffect(() => {
    axios.get("https://the-doors.herokuapp.com/api/magnificent").then((res) => {
      setAbout(res.data);
    });
  }, []);
  useEffect(() => {
    if (!ref1.current || !ref2.current || !ref3.current) return;
    const options = {
      max: 20,
      scale: 1.05,
      speed: 1000,
      glare: true,
      "max-glare": 0.5,
    };
    VanillaTilt.init(ref1.current, options);
    VanillaTilt.init(ref2.current, options);
    VanillaTilt.init(ref3.current, options);
    // clean up function
    return () => {
      // ref.current.vanillaTilt.destroy();
    };
  }, [ref1, ref2, ref3]);
  return (
    <div
      className={`${entity?.isIntersecting && styles.active} ${styles.work}`}
      ref={ref}
    >
      <div className={styles.text}>
        <h1>{getContent(about?.titleRu, about?.titleUz)}</h1>
        <p>{getContent(about?.descriptionRu, about?.descriptionUz)}</p>
        <div className={styles.static}>
          <AiOutlineLike />
          <div>
            <h1>{about?.created}+</h1>
            <p>{getContent("Созданные проекты", "Yaratilagan loyihalar")}</p>
          </div>
        </div>{" "}
        <div className={styles.static}>
          <AiOutlineLike />
          <div>
            <h1>{about?.done}</h1>
            <p>
              {getContent("Реализованные проекты", "Yakunlangan loyihalar")}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.images}>
        <img
          src={`https://the-doors.herokuapp.com/api/files/${about?.contentIds[0]}`}
          alt=""
          ref={ref1}
        />
        <div>
          <img
            src={`https://the-doors.herokuapp.com/api/files/${about?.contentIds[1]}`}
            alt=""
            ref={ref2}
          />
          <img
            src={`https://the-doors.herokuapp.com/api/files/${about?.contentIds[2]}`}
            alt=""
            ref={ref3}
          />
        </div>
      </div>
    </div>
  );
}

export default MagnificentWork;
