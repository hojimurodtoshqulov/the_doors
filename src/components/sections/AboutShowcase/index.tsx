import ShowcaseContent from "@/components/ShowcaseContent";
import styles from "./styles.module.scss";
import nm from "../../../../public/media/hero1.png";
function AboutShowcase() {
  return (
    <div
      className={styles.showcase}
      style={{ background: `url(${nm.src})`, backgroundAttachment: "fixed" }}
    >
      {" "}
      <ShowcaseContent
        title="About our company"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
"
      ></ShowcaseContent>
    </div>
  );
}

export default AboutShowcase;
