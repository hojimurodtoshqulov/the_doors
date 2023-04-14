import ImageMagnifierGlass from "../ImageMagnifierGlass";
import styles from "./styles.module.scss";

function ModalImages({ images }: { images?: string[] }) {
  return (
    <div className={styles.images}>
      <div className={styles.miniimages}>
        {images?.slice(0, 3).map((image: string) => (
          <ImageMagnifierGlass imageSrc={image} />
        ))}
      </div>
      <div className={styles.mainimage}>
        <img src={images?.[3]} alt="" />
      </div>
    </div>
  );
}

export default ModalImages;
