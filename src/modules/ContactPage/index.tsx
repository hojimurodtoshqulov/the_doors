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

function ContactPage() {
  const intl = useIntl();
  const t = (id: string) => {
    return intl?.formatMessage({ id: id });
  };

  const [showcase, setShowcase] = useState<any>({});
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
        p={showcase.descriptionUz}
      >
        <BsFillTelephoneFill />
        <a href="tel:+998999999999" target="_blanck">
          +{showcase.titleUz?.split("*")[0]}
        </a>
      </MainShowcase>
      <SocialSection />
      <FormSection />
    </div>
  );
}

export default ContactPage;
