import Title from "@/components/Title";
import React from "react";
import styles from "./style.module.scss";
import { useTarjima } from "@/utils/getContent";

const TextSection = () => {
  const getContent = useTarjima();
  return (
    <div className={styles.textSection}>
      <Title>
        {getContent("ОСОБЕННОСТИ И ПРЕИМУЩЕСТВА", "XUSUSIYATLARI VA FOYDALARI")}
      </Title>
      <p>
        {getContent(
          "Ворота для гаража обладают современным внешним видом, они безопасны, надежны, отвечают всем требованиям международных стандартов. Они разработаны для эксплуатации в различных климатических условиях.",
          "Garaj eshiklari zamonaviy ko'rinishga ega, ular xavfsiz, ishonchli, xalqaro standartlarning barcha talablariga javob beradi. Ular turli iqlim sharoitida ishlash uchun mo'ljallangan."
        )}
      </p>
      <p>
        {getContent(
          "При изготовлении подвижных ограждающих систем используются только стойкие покрытия и надежные материалы. Все металлические детали оцинкованы и окрашены порошковой краской, что обеспечивает высокие антикоррозийные свойства. Конструкция герметична, не допускает проникновения холода в помещение, исключает теплопотери.",
          "Harakatlanuvchi yopiq tizimlarni ishlab chiqarishda faqat chidamli qoplamalar va ishonchli materiallar qo'llaniladi. Barcha metall qismlar galvanizli va chang bo'yalgan, bu yuqorilikni ta'minlaydi korroziyaga qarshi xususiyatlar. Dizayn germetikdir, xonaga sovuqning kirib borishiga yo'l qo'ymaydi, issiqlik yo'qotilishini yo'q qiladi."
        )}
      </p>
      <p>
        {getContent(
          "Ограждения оснащены фотоэлементами, устройствами защиты от обрыва пружины и другими системами, которые создают полную безопасность эксплуатации. Электроприводы обеспечивают автоматическое открывание и закрывание при помощи пульта дистанционного управления.",
          "Panjara fotosellar, sinishdan himoya qiluvchi qurilmalar bilan jihozlangan to'liq xavfsizlikni yaratadigan buloqlar va boshqa tizimlar operatsiya. Elektr drayvlar avtomatik ochilishni ta'minlaydi va masofadan boshqarish pulti bilan yopish."
        )}
      </p>
    </div>
  );
};

export default TextSection;
