import useIntersectionObserver from "@/utils/InterSectionObserver";
import React, { useRef } from "react";
import styles from "./styles.module.scss";
import { MainPropType } from "@/shared/types";

function ProjectImage({ src, style }: { src: string } & MainPropType) {
  const ref = useRef(null);
  const entity = useIntersectionObserver(ref, {});

  return (
    <img
      src={src}
      alt=""
      className={`${styles.image} ${entity?.isIntersecting && styles.active}`}
      style={style}
      ref={ref}
    />
  );
}

export default ProjectImage;
