import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import image1 from "/public/media/Rectangle 15.png";
import image2 from "/public/media/Rectangle 9.png";
import VanillaTilt from "vanilla-tilt";
import useIntersectionObserver from "@/utils/InterSectionObserver";

function AboutSection() {
	const ref1 = useRef(null);
	const ref2 = useRef(null);

	const ref = useRef(null);
	const entity = useIntersectionObserver(ref, {});

	useEffect(() => {
		if (!ref1.current || !ref2.current) {
			return;
		}
		const options = {
			max: 20,
			scale: 1.05,

			speed: 1000,
			glare: true,
		};
		VanillaTilt.init(ref1.current, options);
		VanillaTilt.init(ref2.current, options);
	}, [ref1.current, ref2.current]);

	return (
		<div
			className={`${entity?.isIntersecting && styles.active} ${styles.about}`}
			ref={ref}
		>
			<div className={styles.images}>
				<img src={image1.src} alt="" ref={ref1} />
				<img src={image2.src} alt="" ref={ref2} />
			</div>
			<div className={styles.description} id="about">
				<h3>О нас</h3>
				<p>
					Мы - компания «THEDOORS», специализируемся на установке автоматических
					ворот, роллет , шлагбаумов и перегрузочного оборудования. С момента
					нашего основания в 2000 году , мы постоянно совершенствуемся и
					развиваемся , чтобы наши клиенты оставались довольны нашей продукцией
					. Наша команда состоит из опытных высококвалифицированных
					профессионалов, готовых к решению любых сложных задач!
				</p>
			</div>
		</div>
	);
}

export default AboutSection;
