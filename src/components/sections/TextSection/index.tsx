import Title from "@/components/Title";
import React from "react";
import styles from "./style.module.scss";

const TextSection = () => {
  return (
    <div className={styles.textSection}>
      <Title>ОСОБЕННОСТИ И ПРЕИМУЩЕСТВА</Title>
      <p>
        Ворота для гаража обладают современным внешним видом, они безопасны,
        надежны, отвечают всем требованиям международных стандартов. Они
        разработаны для эксплуатации в различных климатических условиях.
      </p>
      <p>
        При изготовлении подвижных ограждающих систем используются только
        стойкие покрытия и надежные материалы. Все металлические детали
        оцинкованы и окрашены порошковой краской, что обеспечивает высокие
        антикоррозийные свойства. Конструкция герметична, не допускает
        проникновения холода в помещение, исключает теплопотери.
      </p>
      <p>
        Ограждения оснащены фотоэлементами, устройствами защиты от обрыва
        пружины и другими системами, которые создают полную безопасность
        эксплуатации. Электроприводы обеспечивают автоматическое открывание и
        закрывание при помощи пульта дистанционного управления.
      </p>
    </div>
  );
};

export default TextSection;