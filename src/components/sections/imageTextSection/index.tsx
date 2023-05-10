import React from "react";
import styles from "./style.module.scss";
import { useTarjima } from "@/utils/getContent";

const ImageTextSection = () => {
  const getContent = useTarjima();
  return (
    <div className={styles.imageTextSection}>
      <div className={styles.imageWrap}>
        <img src="/media/textSectionimg.png" alt="" />
      </div>
      <div className={styles.textWrap}>
        <p className="text">
          {getContent(
            "Это системы, огораживающие практически любые типы проемов. Они используются в разных сферах деятельности: строительной, торговой, промышленной, частной. Ворота с дистанционным управлением – популярный вид конструкции, который считается доступным и долговечным.",
            "Bu deyarli har qanday turdagi teshiklarni o'rab turgan tizimlardir. Ular turli faoliyat sohalarida qo'llaniladi: qurilish, savdo, sanoat, xususiy. Masofadan boshqarish pulti bilan darvozalar - mashhur arzon va bardoshli deb hisoblangan qurilish turi."
          )}
        </p>

        <p className="text">
          {getContent(
            "Мы изготавливаем не только бытовые, но и промышленные модели для установки в проемы производственных зданий, складских помещений, цехов, терминалов. Возможен заказ модели нестандартного размера и типов подъема, выбор цвета конструкции.",
            "Biz nafaqat mahalliy, balki sanoat binolari, omborlar, ustaxonalar, terminallarni o'rnatish va ishlab chiqarish uchun mo'ljallangan modellarni ishlab chiqaramiz. Nostandart o'lchamdagi modellarni va ko'tarilish turlarini buyurtma qilish, dizayn rangini tanlash mumkin."
          )}
        </p>
      </div>
    </div>
  );
};

export default ImageTextSection;
