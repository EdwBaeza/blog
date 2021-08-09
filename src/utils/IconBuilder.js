import React from "react";
import {
  SiJavascript,
  SiPython,
  SiGo,
  SiRuby,
  SiJava,
  SiPhp,
  SiKotlin,
  ImBlocked,
} from "react-icons/si";
import { FiXCircle } from "react-icons/fi";

const defaultIconSize = "45";
const defaultIcon = () => (
  <FiXCircle className="mx-auto" size={defaultIconSize} color="B02E0C" />
);
const ICONS = {
  python: () => (
    <SiPython className="mx-auto" size={defaultIconSize} color="#4B8BBE" />
  ),
  javascript: () => (
    <SiJavascript className="mx-auto" size={defaultIconSize} color="#f0db4f" />
  ),
  go: () => <SiGo className="mx-auto" size="55" color="#29BEB0" />,
  ruby: () => (
    <SiRuby className="mx-auto" size={defaultIconSize} color="#820C02" />
  ),
  java: () => (
    <SiJava className="mx-auto" size={defaultIconSize} color="#f89820" />
  ),
  php: () => (
    <SiPhp className="mx-auto" size={defaultIconSize} color="#474A8A" />
  ),
  kotlin: () => (
    <SiKotlin className="mx-auto" size={defaultIconSize} color="#1AA2D4" />
  ),
};

function BuildIcon(key) {
  const sanitizeKey = key.toLowerCase();
  const iconBuilder = ICONS[sanitizeKey];
  return !iconBuilder ? defaultIcon() : iconBuilder();
}

export default BuildIcon;
