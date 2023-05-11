import ShowcaseContent from "@/components/ShowcaseContent";
import styles from "./styles.module.scss";
import { MainPropType } from "@/shared/types";

function MainShowcase({
  image,
  p,
  children,
}: { image: string; p: React.ReactNode } & MainPropType) {
  return (
    <div
      className={styles.showcase}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <ShowcaseContent title={children} paragraph={p}></ShowcaseContent>
    </div>
  );
}

export default MainShowcase;
