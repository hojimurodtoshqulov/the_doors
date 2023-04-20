import { MouseEvent, useEffect, useMemo, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { log } from "console";
import hero from "../../../public/media/Rectangle 6959.png";
import ImageMagnifierGlass from "../ImageMagnifier";

function ModalImages({ images }: { images?: string[] }) {
  const [image, setImage] = useState<string>(images?.[0] || "");

  useEffect(() => {
    setImage(images?.[0] || "");
  }, [images]);
  console.log(image);

  return (
    <div className={styles.images}>
      <div className={styles.miniimages}>
        {images?.map((image: string) => (
          <img
            src={image}
            onClick={(e) => {
              setImage(image);
            }}
          />
        ))}
        <img
          src={images?.[0]}
          onClick={(e) => {
            setImage(images?.[0] || "");
          }}
        />
      </div>
      <ImageMagnifierGlass imageSrc={image} />
    </div>
  );
}

export default ModalImages;
