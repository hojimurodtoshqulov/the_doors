import scss from "./style.module.scss";
import { MainPropType } from "@/shared/types";
import React, { useState } from "react";
import { motion } from "framer-motion";
const spring = {
	type: "spring",
	stiffness: 700,
	damping: 30,
};
function SwitchButton({
	children,
	style,
	onClick,
}: MainPropType & { onClick?: () => void }) {
	const [isOn, setIsOn] = useState(false);
	const toggleSwitch = () => setIsOn(!isOn);
	return (
		<div className={scss.switch} data-isOn={isOn} onClick={toggleSwitch}>
			<motion.div className={scss.handle} layout transition={spring} />
		</div>
	);
}
export default SwitchButton;