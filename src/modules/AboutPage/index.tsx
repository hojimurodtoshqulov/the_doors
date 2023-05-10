import React from "react";
import AboutShowcase from "@/components/sections/MainShowcase";
import Adds from "@/components/Adds";
import AboutSection from "@/components/sections/AboutSection";
import hero from "../../../public/media/hero3.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";
import { useTarjima } from "@/utils/getContent";
import Certification from "@/components/sections/Certificattions";

function AboutPage() {
  const [showcase, setShowcase] = useState<any>({});
  const getContent = useTarjima();
  useEffect(() => {
    axios
      .get("https://the-doors.herokuapp.com/api/about-us-showcase")
      .then((res) => {
        setShowcase(res.data);
      });
  }, []);

  return (
    <div>
      <AboutShowcase
        image={`https://the-doors.herokuapp.com/api/files/${showcase?.attachmentContentId}`}
        p={getContent(showcase?.descriptionRu, showcase?.descriptionUz) || ""}
      >
        {" "}
        {getContent(showcase?.titleRu, showcase?.titleUz)}{" "}
      </AboutShowcase>
      <AboutSection />
      <Certification />
      <Adds style={{ padding: "150px 7%" }} />
    </div>
  );
}

export default AboutPage;
