import Title from "@/components/Title";
import styles from "./about.module.scss";
import Video from "@/components/Video";
import Adds from "@/components/Adds";

function VideoSection() {
  return (
    <section className={styles.about}>
      <Title>About our company</Title>

      <Video src="https://d33wubrfki0l68.cloudfront.net/f68e6df6a1831686ec7c8dca195d93107f221cd2/a36ed/img/ocean.mp4" />

      <Adds />
    </section>
  );
}

export default VideoSection;
