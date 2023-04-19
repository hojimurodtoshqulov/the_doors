import React, { useRef } from "react";
import styles from "./styles.module.scss";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import Link from "next/link";
import useIntersectionObserver from "@/utils/InterSectionObserver";

function SocialSection() {
  const ref = useRef(null);
  const entity = useIntersectionObserver(ref, { threshold: 0.5 });

  return (
    <div
      className={`${entity?.isIntersecting && styles.active} ${styles.socials}`}
      ref={ref}
    >
      <h1>Социальные Сети</h1>
      <div>
        <p>Менеджеры компании ответят на все вопросы по телефону:</p>
        <div className={styles.icons}>
          <Link href="/">
            <RiInstagramFill />
          </Link>
          <Link href="/">
            <FaTelegramPlane />
          </Link>
          <Link href="/">
            <AiFillYoutube />
          </Link>
          <Link href="/">
            <FaFacebookF />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SocialSection;
