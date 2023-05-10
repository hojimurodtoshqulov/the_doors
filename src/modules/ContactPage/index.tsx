import MainShowcase from "@/components/sections/MainShowcase";
import Showcase from "@/components/sections/Showcase";
import React, { useEffect, useState } from "react";
import image from "../../../public/media/CONTACTHERO.png";
import Adds from "@/components/Adds";
import SocialSection from "@/components/sections/SocialSection";
import { BsFillTelephoneFill } from "react-icons/bs";
import useIntl from "react-intl/src/components/useIntl";
import FormSection from "@/components/sections/FormSection";
import axios from "axios";
import { log } from "console";
import { useTarjima } from "@/utils/getContent";

function ContactPage() {
  const intl = useIntl();
  const t = (id: string) => {
    return intl?.formatMessage({ id: id });
  };

  const [showcase, setShowcase] = useState<any>({});
  const getContent = useTarjima();
  useEffect(() => {
    axios
      .get("https://the-doors.herokuapp.com/api/show-case/52")
      .then((res) => {
        setShowcase(res.data);
      });
  }, []);
  return (
    <div>
      <MainShowcase
        image={`https://the-doors.herokuapp.com/api/files/${showcase.attachmentContentIds?.[0]}`}
        p={getContent(showcase.descriptionRu, showcase.descriptionUz) || ""}
      >
        <BsFillTelephoneFill />
        <a href="tel:+998999999999" target="_blanck" style={{ maxWidth: 400 }}>
          {/* +{showcase.titleUz?.replaceAll("*", " +")} */}
        </a>
        <h1
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          {showcase.titleUz?.split("*").map((el: string) => (
            <a>+{el}</a>
          ))}
        </h1>
      </MainShowcase>
      {/* <SocialSection /> */}
      <FormSection />
    </div>
  );
}

export default ContactPage;
