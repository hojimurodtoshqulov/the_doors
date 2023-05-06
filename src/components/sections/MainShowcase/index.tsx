import ShowcaseContent from "@/components/ShowcaseContent";
import styles from "./styles.module.scss";
import { MainPropType } from "@/shared/types";

function MainShowcase({
  image,
  p,
  children,
}: { image: string; p: string } & MainPropType) {
  return (
    <div
      className={styles.showcase}
      style={{
        background: `url("${image}")`,
        backgroundAttachment: "fixed",
        backgroundSize: "100% 100%",
      }}
    >
      <ShowcaseContent title={children} paragraph={p}></ShowcaseContent>
    </div>
  );
}

export default MainShowcase;
