import { ForwardedRef, forwardRef, useContext } from "react";
import { ThemeUICSSObject } from "theme-ui";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { sizes } from "../../../themes";
import { List, MotionList } from "../Container";
import SocialLink, { SocialLinkType } from "./Link";

const links: SocialLinkType[] = [
  { text: "Github", icon: "SiGithub", href: "https://github.com/sheeeeeeeeeenn" },
  { text: "LinkedIn", icon: "FaLinkedinIn", href: "https://www.linkedin.com/in/shenmar-bonifacio-10660b1ba/" },
  { text: "Vercel", icon: "SiVercel", href: "https://vercel.com/shenmars-projects" }, 
  
];


const SocialPanelWithRef = ({}, ref: ForwardedRef<HTMLUListElement>) => {
  const { reduceMotion } = useContext(GlobalContext);
  const containerSize = 250;
  const containerHalf = containerSize / 2;
  const iconSize = 48;
  const iconHalf = iconSize / 2;

  const setIconPos = (index: number) =>
    [
      { top: containerHalf - iconHalf, left: 0 },
      { top: "52px", left: "15px" },
      { top: "15px", left: "52px" },
      { top: 0, left: containerHalf - iconHalf },
    ][index];

  const Container = reduceMotion.val ? List : MotionList;

  const containerStyle: ThemeUICSSObject = {
    size: containerSize,
    position: "absolute",
    bottom: sizes[2] + 12 - containerHalf,
    right: sizes[2] + 12 - containerHalf,
  };

  return (
    <Container ref={ref} sx={containerStyle} animate={{ scale: 1 }} initial={{ scale: 0 }} exit={{ scale: 0 }}>
      {links.map((link, i) => (
        <li key={i} style={{ position: "absolute", ...setIconPos(i) }}>
          <SocialLink link={link} size={iconSize} />
        </li>
      ))}
    </Container>
  );
};

const SocialPanel = forwardRef(SocialPanelWithRef);

export default SocialPanel;
