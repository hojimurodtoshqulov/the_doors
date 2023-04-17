import styles from "./styles.module.scss";
import image1 from "/public/media/hero1.png";
import image2 from "/public/media/hero2.png";

function AboutSection() {
  return (
    <div className={styles.about}>
      <div className={styles.images}>
        <img src={image1.src} alt="" />
        <img src={image2.src} alt="" />
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
