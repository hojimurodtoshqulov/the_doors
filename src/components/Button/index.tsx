import { MainPropType } from "@/shared/types";
import React from "react";

function Button({ children }: MainPropType) {
  return <button>{children}</button>;
}

export default Button;
