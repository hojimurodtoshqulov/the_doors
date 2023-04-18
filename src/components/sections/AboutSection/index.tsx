import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import image1 from "/public/media/hero1.png";
import image2 from "/public/media/hero2.png";
import VanillaTilt from "vanilla-tilt";
import useIntersectionObserver from "@/utils/InterSectionObserver";

function AboutSection() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const ref = useRef(null);
  const entity = useIntersectionObserver(ref, {});

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

  return (
    <div
      className={`${entity?.isIntersecting && styles.active} ${styles.about}`}
      id="about"
      ref={ref}
    >
      <div className={styles.images}>
        <img src={image1.src} alt="" ref={ref1} />
        <img src={image2.src} alt="" ref={ref2} />
      </div>
      <div className={styles.description}>
        <h3>О нас</h3>
        <p>
          Международный концерн The Door — это промышленная группа
          глубокоинтегрированных производственных предприятий, общей целью
          которых является комплексная поставка полнокомплектных решений для
          объектов промышленного строительства, частного домостроения, а также
          объектов специального назначения, городской инфраструктуры и сельского
          хозяйства. Все предлагаемые решения полностью состоят из продукции
          DoorHan, кроме того, спроектированы и изготовлены на собственных
          заводах концерна The Door.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
