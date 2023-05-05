import React from "react";
import AboutShowcase from "@/components/sections/MainShowcase";
import Adds from "@/components/Adds";
import AboutSection from "@/components/sections/AboutSection";
import hero from "../../../public/media/hero3.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";

function AboutPage() {
  const [showcase, setShowcase] = useState<any>({});
  useEffect(() => {
    axios
      .get("https://the-doors.herokuapp.com/api/show-case/53")
      .then((res) => {
        setShowcase(res.data);
      });
  }, []);

  return (
    <div>
      <AboutShowcase
        image={`https://the-doors.herokuapp.com/api/files/${showcase?.attachmentContentIds?.[0]}`}
        p={showcase?.descriptionUz}
      >
        {" "}
        {showcase?.titleUz}{" "}
      </AboutShowcase>
      <AboutSection />
      <Adds style={{ padding: "150px 7%" }} />
    </div>
  );
}

export default AboutPage;
