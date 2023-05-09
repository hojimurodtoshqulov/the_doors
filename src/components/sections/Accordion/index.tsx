import React from "react";
import { Collapse } from "antd";
import Title from "@/components/Title";
import scss from "./accordion.module.scss";
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
			<Panel header="This is panel header 1" key="1">
				<p>{text}</p>
			</Panel>
			<Panel header="This is panel header 2" key="2">
				<p>{text}</p>
			</Panel>
			<Panel header="This is panel header 3" key="3">
				<p>{text}</p>
			</Panel>
		</Collapse>
	</div>
);

export default Accordion;
