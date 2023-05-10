import Partners from "@/components/Partners";
import Title from "@/components/Title";
import styles from "./styles.module.scss";
import logo1 from "/public/media/msi 7.png";
import logo2 from "/public/media/msi 8.png";
import useIntl from "react-intl/src/components/useIntl";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@/shared/constants";

export type PartnerType = {
  id: string | number;
  attachmentContentId: number;
  link: string;
};

function PartnersSection() {
  const intl = useIntl();
  const t = (id: string) => {
    return intl?.formatMessage({ id: id });
  };
  const [partners, setPartners] = useState<PartnerType[]>([]);

  useEffect(() => {
    axios.get(`${API_URL}/api/partners`).then((res) => {
      setPartners(res.data);
    });
  }, []);

  return (
    <div className={styles.partners}>
      <Title style={{ padding: "0 7% 20px" }}>
        <i> {t("partners")}</i>
      </Title>
      <Partners partners={partners} />
    </div>
  );
}

export default PartnersSection;
