import React from "react"
import { SiJavascript, SiPython, SiGo, SiRuby, SiJava, SiPhp, SiKotlin, ImBlocked } from "react-icons/si";
import { FiXCircle } from "react-icons/fi";

const defaultIconSize = "35";
const defaultIcon = () => <FiXCircle size={defaultIconSize} color="B02E0C"/>
const ICONS = {
  python: () => <SiPython size={defaultIconSize} color="#4B8BBE" />,
  javascript: () => <SiJavascript size={defaultIconSize} color="#f0db4f" />,
  go: () => <SiGo size={defaultIconSize} color="#29BEB0" />,
  ruby: () => <SiRuby size={defaultIconSize} color="#820C02" />,
  java: () => <SiJava size={defaultIconSize} color="#f89820" />,
  php: () => <SiPhp size={defaultIconSize} color="#474A8A" />,
  kotlin: () => <SiKotlin size={defaultIconSize} color="#1AA2D4" />
}

function BuildIcon(key) {
  const sanitizeKey = key.toLowerCase();
  const iconBuilder = ICONS[sanitizeKey]
  return !iconBuilder ? defaultIcon() : iconBuilder()
}

export default BuildIcon;
