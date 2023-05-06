import React from "react";
import AboutShowcase from "@/components/sections/MainShowcase";
import Adds from "@/components/Adds";
import hero from "../../../public/media/qwqw.png";
import OurProjects from "@/components/sections/OurProjects";
import useIntl from "react-intl/src/components/useIntl";
import { useState, useEffect } from "react";
import axios from "axios";
import { useTarjima } from "@/utils/getContent";

function ProjectsPage() {
  const intl = useIntl();
  const t = (id: string) => {
    return intl?.formatMessage({ id: id });
  };
  const [showcase, setShowcase] = useState<any>({});
  const getContent = useTarjima();
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
        image={`https://the-doors.herokuapp.com/api/files/${showcase.attachmentContentIds?.[0]}`}
        p={getContent(showcase.descriptionRu, showcase.descriptionUz) || ""}
      >
        {getContent(showcase.titleRu, showcase.titleUz)}
      </AboutShowcase>
      <OurProjects />
      <Adds />
    </div>
  );
}

export default ProjectsPage;
