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
	const getContent = useTarjimaNode();
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
				p={
					getContent(
						<div style={{ fontSize: "20px", lineHeight: "30px"}}>
							Городской офис в Ташкенте
							<br /> Адрес: Узбекистан, г. Ташкент, ул. Фаргона Йули, 11А, 2
							этаж
							<br /> E-mail: откроем фирменный ящик !!!!!
							<br /> Сайт: www.thedoors.uz
							<br /> Режим работы: понедельник — пятница с 9:00 до 17:00, без
							перерыва
						</div>,
						<div style={{ fontSize: "20px", lineHeight: "30px"}}>
							Toshkent shahar idorasi
							<br /> Manzil: O'zbekiston, Toshkent, ko'ch. Farg‘ona yo‘li, 11A,
							2 qavat
							<br /> E-mail: keling kompaniya qutisini ochamiz!!!!!
							<br /> Sayt: www.thedoors.uz
							<br /> Ish vaqti: dushanbadan jumagacha soat 9:00 dan 17:00 gacha
							tanaffus
						</div>
					) || ""
				}
			>
				<BsFillTelephoneFill />
				<h1
					style={{
						display: "flex",
						flexDirection: "column",
						gap: 0,
					}}
				>
					{showcase.titleUz?.split("*").map((el: string) => (
						<a> +{el}</a>
					))}
				</h1>
			</MainShowcase>
			{/* <SocialSection /> */}
			<FormSection />
		</div>
	);
}

export default ContactPage;
