import React from "react";
import styles from "./style.module.scss";

const ImageTextSection = () => {
  return (
    <div className={styles.imageTextSection}>
      <div className={styles.imageWrap}>
        <img src="/media/textSectionimg.png" alt="" />
      </div>
      <div className={styles.textWrap}>
        <p>
          это системы, огораживающие практически любые типы проемов. Они
          используются в разных сферах деятельности: строительной, торговой,
          промышленной, частной. Ворота с дистанционным управлением – популярный
          вид конструкции, который считается доступным и долговечным.
        </p>

        <p>
          Мы изготавливаем не только бытовые, но и промышленные модели для
          установки в проемы производственных зданий, складских помещений,
          цехов, терминалов. Возможен заказ модели нестандартного размера и
          типов подъема, выбор цвета конструкции.
        </p>
      </div>
    </div>
  );
};

export default ImageTextSection;
