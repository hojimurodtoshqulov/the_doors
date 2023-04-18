import React, { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import { AiOutlineLike } from "react-icons/ai";
import image from "../../../../public/media/hero2.png";
import VanillaTilt from "vanilla-tilt";

function MagnificentWork() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    if (!ref1.current || !ref2.current || !ref3.current) return;
    const options = {
      max: 20,
      scale: 1.05,
      speed: 1000,
      glare: true,
      "max-glare": 0.5,
    };
    VanillaTilt.init(ref1.current, options);
    VanillaTilt.init(ref2.current, options);
    VanillaTilt.init(ref3.current, options);
    // clean up function
    return () => {
      // ref.current.vanillaTilt.destroy();
    };
  }, [ref1, ref2, ref3]);
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
        <img src={image.src} alt="" ref={ref1} />
        <div>
          <img src={image.src} alt="" ref={ref2} />
          <img src={image.src} alt="" ref={ref3} />
        </div>
      </div>
    </div>
  );
}

export default MagnificentWork;
