import { MouseEvent, useEffect, useMemo, useRef, useState } from "react";
import styles from "./styles.module.scss";
import hero from "../../../public/media/Rectangle 6959.png";
import ImageMagnifierGlass from "../ImageMagnifier";

function ModalImages({ images }: { images?: { data: string }[] }) {
  const [image, setImage] = useState<string>(images?.[0].data || "");

  useEffect(() => {
    setImage(images?.[0].data || "");
  }, [images]);

  console.log(images);

  return (
    <div className={styles.images}>
      <div className={styles.miniimages}>
        {images?.map((image: { data: string }) => (
          <img
            src={`data:image/png;base64,${image.data}`}
            onClick={(e) => {
              setImage(image.data);
            }}
          />
        ))}
        {/* <img
          src={`data:image/png;base64,${images?.[0].data}`}
          onClick={(e) => {
            setImage(images?.[0].data || "");
          }}
        /> */}
      </div>
      <ImageMagnifierGlass imageSrc={image} />
    </div>
  );
}

export default ModalImages;
