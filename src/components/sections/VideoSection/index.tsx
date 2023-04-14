import Title from "@/components/Title";
import styles from "./about.module.scss";
import Video from "@/components/Video";
import Adds from "@/components/Adds";

function VideoSection() {
  return (
    <section className={styles.about} id="about">
      <Title>About our company</Title>

      <Video src="https://prolinegroup.uz/wp-content/uploads/2022/02/new_project.mp4" />

      <Adds />
      {/* <video
        src="https://prolinegroup.uz/wp-content/uploads/2022/02/new_project.mp4"
        style={{ position: "sticky", top: 0, backgroundColor: "white" }}
        muted
        loop
        autoPlay
      ></video> */}
    </section>
  );
}

export default VideoSection;
