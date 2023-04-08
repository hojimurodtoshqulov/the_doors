import Link from "next/link";
import bg from "../../../public/media/constactus.png";
import styles from "./contact.module.scss";
import Button from "../Button";

function ContactUsSection() {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className={styles.contactus}
    >
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5995.219903621188!2d69.2257882!3d41.2955927!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE3JzQ1LjIiTiA2OcKwMTMnNDMuNyJF!5e0!3m2!1sen!2s!4v1680915232094!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
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
      <form action="/">
        <h1>Contact us</h1>
        <div className={styles.line}></div>
        <div>
          <input type="text" placeholder="First name*" />
          <input type="text" placeholder="Last name*" />
        </div>
        <div>
          <input type="text" placeholder="Email adress*" />
          <input type="text" placeholder="Phone number*" />
        </div>
        <textarea placeholder="Message"></textarea>
        <div className={styles.line}></div>
        <Button>Request a call</Button>
      </form>
    </div>
  );
}

export default ContactUsSection;
