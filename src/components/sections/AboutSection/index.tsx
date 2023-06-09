import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import image1 from "/public/media/Rectangle 15.png";
import image2 from "/public/media/Rectangle 9.png";
import VanillaTilt from "vanilla-tilt";
import useIntersectionObserver from "@/utils/InterSectionObserver";
import Title from "@/components/Title";
import useIntl from "react-intl/src/components/useIntl";
import axios from "axios";
import { useTarjima } from "@/utils/getContent";

function AboutSection() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref = useRef(null);
  const entity = useIntersectionObserver(ref, {});

  const [about, setAbout] = useState<
    | {
        attachmentContentIds: [number, number];
        descriptionRu: string;
        descriptionUz: string;
      }
    | undefined
  >();
  useEffect(() => {
    axios.get("https://the-doors.herokuapp.com/api/about-us").then((res) => {
      setAbout(res.data);
    });
  }, []);

  const getContent = useTarjima();

  useEffect(() => {
    if (!ref1.current || !ref2.current) {
      return;
    }
    const options = {
      max: 20,
      scale: 1.05,

      speed: 1000,
      glare: true,
    };
    VanillaTilt.init(ref1.current, options);
    VanillaTilt.init(ref2.current, options);
  }, [ref1.current, ref2.current]);

  const intl = useIntl();
  const t = (id: string) => {
    return intl?.formatMessage({ id: id });
  };
  return (
    <div
      className={`${entity?.isIntersecting && styles.active} ${styles.about}`}
      ref={ref}
      id="about"
    >
      <div className={styles.images}>
        <img
          src={`https://the-doors.herokuapp.com/api/files/${about?.attachmentContentIds?.[0]}`}
          alt=""
          ref={ref1}
        />
        <img
          src={`https://the-doors.herokuapp.com/api/files/${about?.attachmentContentIds?.[1]}`}
          alt=""
          ref={ref2}
        />
      </div>
      <div className={styles.description}>
        <Title style={{ marginBottom: "40px", color: "#666" }}>
          {t("about")}
        </Title>
        {/* <h3>О нас</h3> */}
        <p>{getContent(about?.descriptionRu, about?.descriptionUz)}</p>
      </div>
    </div>
  );
}

export default AboutSection;
