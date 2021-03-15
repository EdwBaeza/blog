import { SiJavascript } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiGo } from "react-icons/si";
import { SiRuby } from "react-icons/si";
import { SiJava } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiKotlin } from "react-icons/si";

function BuildIcon(key) {
  const sanitizeKey = key.toLowerCase();
  const defaultIconSize = "35";

  if (sanitizeKey === "python") {
    return <SiPython size={defaultIconSize} color="#4B8BBE" />;
  } else if (sanitizeKey === "javascript") {
    return <SiJavascript size={defaultIconSize} color="#f0db4f" />;
  } else if (sanitizeKey === "go") {
    return <SiGo size={defaultIconSize} color="#29BEB0" />;
  } else if (sanitizeKey === "ruby") {
    return <SiRuby size={defaultIconSize} color="#820C02" />;
  } else if (sanitizeKey === "java") {
    return <SiJava size={defaultIconSize} color="#f89820" />;
  } else if (sanitizeKey === "php") {
    return <SiPhp size={defaultIconSize} color="#474A8A" />;
  } else if (sanitizeKey === "kotlin") {
    return <SiKotlin size={defaultIconSize} color="#1AA2D4" />;
  }
}

export default BuildIcon;
