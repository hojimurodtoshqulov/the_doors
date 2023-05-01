import { MouseEvent, useEffect, useMemo, useRef, useState } from "react";
import styles from "./styles.module.scss";
import ImageMagnifierGlass from "../ImageMagnifier";

function ModalImages({ images }: { images?: { data: string }[] }) {
  return (
    <div className={styles.images}>
      <div className={styles.miniimages}>
        {images?.slice(1, 4).map((image: { data: string }) => (
          <img
            src={`data:image/png;base64,${image.data}`}
            onClick={(e) => {
              e.currentTarget.classList.toggle(styles.active);
            }}
          />
        ))}
      </div>
      <ImageMagnifierGlass imageSrc={images?.[0].data || ""} />
    </div>
  );
}

export default ModalImages;
