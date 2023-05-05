import styles from "./add.module.scss";
import poster1 from "../../../public/media/Vector (1).png";
import poster2 from "../../../public/media/Group 10.png";
import poster3 from "../../../public/media/Vector.png";
import poster4 from "../../../public/media/Group 13.png";
import { MainPropType } from "@/shared/types";
import useIntersectionObserver from "@/utils/InterSectionObserver";
import { useRef, useEffect, useState } from "react";
import useIntl from "react-intl/src/components/useIntl";
import axios from "axios";
function Adds({ style }: MainPropType) {
  const ref = useRef(null);
  const entity = useIntersectionObserver(ref, {});
  const intl = useIntl();
  const [data, setData] = useState<any>({});
  const t = (id: string) => {
    return intl?.formatMessage({ id: id });
  };
  useEffect(() => {
    axios.get("https://the-doors.herokuapp.com/api/advantage").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div
      className={`${entity?.isIntersecting && styles.active} ${styles.adds}`}
      style={style}
      ref={ref}
    >
      <div className={styles.image}>
        <img src={poster1.src} alt="" />
        <h1 className="banana">{data?.titleUz1}</h1>
        <p>{data?.descriptionUz1}</p>
      </div>
      <div className={styles.stick}></div>
      <div className={styles.image}>
        <img src={poster2.src} alt="" />
        <h1 className="banana">{data?.titleUz2}</h1>
        <p>{data?.descriptionUz2}</p>
      </div>
      <div className={`${styles.stick} ${styles.blue}`}></div>
      <div className={styles.image}>
        <img src={poster3.src} alt="" />
        <h1 className="banana">{data?.titleUz3}</h1>
        <p>{data?.descriptionUz3}</p>
      </div>
      <div className={styles.stick}></div>
      <div className={styles.image}>
        <img src={poster4.src} alt="" />
        <h1 className="banana">{data?.titleUz4}</h1>
        <p>{data?.descriptionUz4}</p>
      </div>
    </div>
  );
}

export default Adds;
