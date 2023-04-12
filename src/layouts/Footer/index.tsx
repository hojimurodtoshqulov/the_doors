import { MainPropType } from "@/shared/types";
import styles from "./footer.module.scss";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import Link from "next/link";
function Footer({ style }: MainPropType) {
  return (
    <footer style={style} className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.row}>
          <h1>The Door</h1>
          <p>
            Quis nostrud exercitatin ullamc boris nisi ut aliquip ex ea commodo
            conse.
          </p>
          <form action="/">
            <input type="text" placeholder="Your email here" />
            <button>
              <GrMail />
            </button>
          </form>
          <div className={styles.icons}>
            <BsFacebook />
            <AiFillInstagram />
            <BsTwitter />
          </div>
        </div>
        <div className={styles.row}>
          <h2>Address</h2>
          <Link href="/">20, Awesome Road, New York, Usa 4D BS3</Link>
          <Link href="/">+123 456 7890</Link>
          <Link href="/">hello@ulina.com</Link>
        </div>
        <div className={styles.row}>
          <h2>Usful Links</h2>
          <Link href="/">Shop Cupon</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Carrer</Link>
          <Link href="/">Supports</Link>
        </div>
        <div className={styles.row}>
          <h2>Katalog</h2>
          <Link href="/">Lorem</Link>
          <Link href="/">Lorem</Link>
          <Link href="/">Lorem</Link>
          <Link href="/">Lorem</Link>
        </div>
      </div>
      <div className={styles.bottom}>
        <h3>©Ulina Official 2022</h3>
        <Link href={"/"}>
          <a>
            <span>
              <p>Privacy policy</p>
              <p>Cookies</p>
              <p>Terms of service</p>
            </span>
          </a>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
