import Link from "next/link";
import bg from "../../../../public/media/constactus.png";
import styles from "./contact.module.scss";
import Button from "../../Button";

function ContactUsSection() {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className={styles.contactus}
    >
      <div className={styles.map} id="contact">
        {/* <div style="position:relative;overflow:hidden;"> */}
        <iframe
          src="https://yandex.com/map-widget/v1/?ll=69.270039%2C41.299661&mode=routes&rtext=~41.300296%2C69.269608&rtt=auto&ruri=~&z=17"
          height="400"
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
