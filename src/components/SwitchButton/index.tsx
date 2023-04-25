import scss from "./style.module.scss";
import { MainPropType } from "@/shared/types";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
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

  const { asPath } = useRouter();

  const toggleSwitch = () => {
    setIsOn((prev) => {
      return !prev;
    });
  };

  const locale = isOn ? "uz" : "ru";

  console.log(locale);

  return (
    <Link href={asPath} locale={locale}>
      <div className={scss.switch} data-isOn={isOn} onClick={toggleSwitch}>
        <motion.div className={scss.handle} layout transition={spring} />
      </div>
    </Link>
  );
}
export default SwitchButton;
