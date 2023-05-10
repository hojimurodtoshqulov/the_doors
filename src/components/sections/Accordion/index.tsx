import React from "react";
import img from "../../../../public/media/CONTACTHERO.png";
import { Collapse } from "antd";
import Title from "@/components/Title";
import scss from "./accordion.module.scss";
import { FaqDataItem, StepItem, faqData, faqtInstallationData } from "@/data/faq.data";
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
      {faqData.map((faq: FaqDataItem, i) => (
        <Panel header={faq.quiz} key={i}>
          <div className={scss.body}>
            <p>{faq.answer}</p>
          </div>
        </Panel>
      ))}
      <Panel header={faqtInstallationData.quiz} key="-1">
        <div className={scss.body}>
		{
			faqtInstallationData.steps.map((faqstep:StepItem)=><div className={scss.step}>
				<p>
					{faqstep.txt}
				</p>
				<img src={faqstep.img} alt="" />
			</div>)
		}
         </div>
      </Panel>
    </Collapse>
  </div>
);

export default Accordion;
