import styles from "./styles.module.scss";

function ModalImages({ images }: { images: string[] }) {
  return <div> {images.join("")}</div>;
}

export default ModalImages;
