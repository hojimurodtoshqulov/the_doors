import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import image1 from "/public/media/hero1.png";
import image2 from "/public/media/hero2.png";
import VanillaTilt from "vanilla-tilt";

function AboutSection() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  useEffect(() => {
    if (!ref1.current) {
      return;
    }
    const options = {
      max: 20,
      speed: 1000,
      glare: true,
      "max-glare": 0.5,
    };
    VanillaTilt.init(ref1.current, options);
    VanillaTilt.init(ref2.current, options);
  }, []);
  return (
    <div className={styles.about} id="about">
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
