import React from "react";
import img from "../../../../public/media/CONTACTHERO.png";
import { Collapse } from "antd";
import Title from "@/components/Title";
import scss from "./accordion.module.scss";
import {
  FaqDataItem,
  StepItem,
  faqData,
  faqtInstallationData,
} from "@/data/faq.data";
import { useTarjima } from "@/utils/getContent";
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Accordion: React.FC = () => {
  const getContent = useTarjima();
  return (
    <div className={`${scss.accordionDiv}`}>
      <Title style={{ color: "#666" }}>ОСОБЕННОСТИ И ПРЕИМУЩЕСТВА</Title>
      <Collapse accordion className={scss.accordion}>
        {faqData.map((faq: FaqDataItem, i) => (
          <Panel header={<h2>{getContent(faq.quizRu, faq.quizUz)}</h2>} key={i}>
            <div className={scss.body}>
              <p>{getContent(faq.answerRu, faq.answerUz)}</p>
            </div>
          </Panel>
        ))}
        <Panel
          header={
            <h2>
              {getContent(
                faqtInstallationData.quizRu,
                faqtInstallationData.quizUz
              )}
            </h2>
          }
          key="-1"
        >
          <div className={scss.body}>
            {faqtInstallationData.steps.map((faqstep: StepItem) => (
              <div className={scss.step}>
                <p>{getContent(faqstep.txtRu, faqstep.txtUz)}</p>
                <img src={faqstep.img} alt="" />
              </div>
            ))}
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Accordion;
