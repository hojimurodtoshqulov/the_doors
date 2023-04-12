import styles from "./partners.module.scss";
import { PartnerType } from "../sections/PartnersSection";
import Link from "next/link";

function Partners({ partners }: { partners: PartnerType[] }) {
  return (
    <div className={styles.parnters}>
      <div>
        {partners.map((partners: PartnerType) => (
          <Link href={partners.link} key={partners.id}>
            <a>
              <img src={partners.image} alt="" />
            </a>
          </Link>
        ))}{" "}
        {partners.map((partners: PartnerType) => (
          <Link href={partners.link} key={partners.id}>
            <a>
              <img src={partners.image} alt="" />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Partners;
