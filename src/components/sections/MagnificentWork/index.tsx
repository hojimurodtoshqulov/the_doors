import React from "react";
import styles from "./style.module.scss";
import { AiOutlineLike } from "react-icons/ai";
import image from "../../../../public/media/hero2.png";

function MagnificentWork() {
  return (
    <div className={styles.work}>
      <div className={styles.text}>
        <h1>MAGNIFICENT WORK</h1>
        <p>
          Lorem ipsum dolor ! Recusandae odit architecto maxime ipsa, quis
          distinctio est at harum obcaecati quia, animi exercitationem ullam
          nemo quam aliquam antium labore quas. Fuga reiciendis earum delectus
          id quaerat, tenetur os aut, ducimus a? Eum ullam veritatis fugit
          itaque nobis placeat nostrum consectetur, sunt ex, iste nemo.
        </p>
        <div className={styles.static}>
          <AiOutlineLike />
          <div>
            <h1>875+</h1>
            <p>Projects Done</p>
          </div>
        </div>{" "}
        <div className={styles.static}>
          <AiOutlineLike />
          <div>
            <h1>320</h1>
            <p>Products Created</p>
          </div>
        </div>
      </div>
      <div className={styles.images}>
        <img src={image.src} alt="" />
        <div>
          <img src={image.src} alt="" />
          <img src={image.src} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MagnificentWork;
