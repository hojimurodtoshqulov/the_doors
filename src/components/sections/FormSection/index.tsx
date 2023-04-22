import Link from "next/link";
import styles from "./contact.module.scss";
import Button from "../../Button";
import useIntersectionObserver from "@/utils/InterSectionObserver";
import { useRef } from "react";

function FormSection() {
  const ref = useRef(null);
  const entity = useIntersectionObserver(ref, {});

  return (
    <div
      className={`${entity?.isIntersecting && styles.active} ${styles.contact}`}
      id="about"
      ref={ref}
    >
      <form action="/" id="contact">
        <h1>Contact us</h1>
        <div className={styles.line}></div>
        <input type="text" placeholder="First name*" />
        <input type="text" placeholder="Phone number*" />
        <textarea placeholder="Message"></textarea>
        <div className={styles.line}></div>
        <Button style={{ borderRadius: 10 }}>Request a call</Button>
      </form>
      <div className={styles.map}>
        {/* <div style="position:relative;overflow:hidden;"> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5995.219903621188!2d69.2257882!3d41.2955927!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE3JzQ1LjIiTiA2OcKwMTMnNDMuNyJF!5e0!3m2!1sen!2s!4v1682008430280!5m2!1sen!2s"></iframe>{" "}
        <div>
          <p>20, Awesome Road, New York, Usa 4D BS3</p>

          <Link href="/">
            <a>+123 456 7890</a>
          </Link>
          <Link href="/">
            <a>hello@ulina.com</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FormSection;
