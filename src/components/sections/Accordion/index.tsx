import React from "react";
import img from "../../../../public/media/CONTACTHERO.png";
import { Collapse } from "antd";
import Title from "@/components/Title";
import scss from "./accordion.module.scss";
import { FaqDataItem, faqData } from "@/data/faq.data";
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Accordion: React.FC = () => (
  <div className={`${scss.accordionDiv}`}>
    <Title style={{ color: "#666" }}>ОСОБЕННОСТИ И ПРЕИМУЩЕСТВА</Title>
    <Collapse accordion className={scss.accordion}>
      {faqData.map((faq: FaqDataItem) => (
        <Panel header={faq.quiz} key="1">
          <div className={scss.body}>
            <p>{text}</p>
            <img src={img.src} alt="" />
          </div>
        </Panel>
      ))}
    </Collapse>
  </div>
);

export default Accordion;
