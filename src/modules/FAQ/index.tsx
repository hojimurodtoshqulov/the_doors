import Title from "@/components/Title";
import MainShowcase from "@/components/sections/MainShowcase";
import TextSection from "@/components/sections/TextSection";
import ImageTextSection from "@/components/sections/imageTextSection";
import { useTarjima } from "@/utils/getContent";
import React from "react";
import Accordion from "@/components/sections/Accordion";

function FAQ() {
	const getContent = useTarjima();

	return (
		<div>
			<MainShowcase
				image={`/media/images.jpg`}
				p={
					getContent(
						"Менеджеры компании ответят на все вопросы по телефону:",
						"Менеджеры компании ответят на все вопросы по телефону:"
					) || ""
				}
			>
				{" "}
				{getContent("FAQ", "FAQ")}
			</MainShowcase>
			<TextSection />
			<ImageTextSection />
			<Accordion />
		</div>
	);
}

export default FAQ;
