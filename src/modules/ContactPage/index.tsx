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
import { useTarjima, useTarjimaNode } from "@/utils/getContent";

function ContactPage() {
  const intl = useIntl();
  const t = (id: string) => {
    return intl?.formatMessage({ id: id });
  };

  const [showcase, setShowcase] = useState<any>({});
  const getContent = useTarjima();
  useEffect(() => {
    axios
      .get("https://the-doors.herokuapp.com/api/show-case/2")
      .then((res) => {
        setShowcase(res.data);
      })
      .catch(console.log);
  }, []);
  return (
    <div>
      <MainShowcase
        image={`https://the-doors.herokuapp.com/api/files/${showcase.attachmentContentIds?.[0]}`}
        p={getContent(showcase.descriptionRu, showcase.descriptionUz) || ""}
      >
        <BsFillTelephoneFill />
        <h1
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
            fontFamily: "sans-serif",
          }}
        >
          {showcase.titleUz?.split("*").map((el: string) => (
            <a href={el}>
              {" "}
              + {el.slice(0, 3)} ({el.slice(3, 5)}) {el.slice(5, 8)}-
              {el.slice(8, 10)}-{el.slice(10, 12)}
            </a>
          ))}
        </h1>
      </MainShowcase>
      {/* <SocialSection /> */}
      <FormSection />
    </div>
  );
}

export default ContactPage;
