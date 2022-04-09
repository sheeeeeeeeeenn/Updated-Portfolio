import { ForwardedRef, forwardRef } from "react";
import { ThemeUICSSObject } from "theme-ui";
import { sizes } from "../../../themes";
import { MotionList } from "../Container";
import SocialLink, { SocialLinkType } from "./Link";

const links: SocialLinkType[] = [
  { text: "Github", icon: "SiGithub", href: "https://github.com/khang-nd" },
  { text: "LinkedIn", icon: "FaLinkedinIn", href: "https://www.linkedin.com/in/khangnd" },
  { text: "Twitter", icon: "SiTwitter", href: "https://twitter.com/_khangnd" },
  { text: "Fandom", icon: "SiFandom", href: "https://dev.fandom.com/wiki/User:KhangND" },
];

const SocialPanelWithRef = ({}, ref: ForwardedRef<HTMLDivElement>) => {

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

  const containerStyle: ThemeUICSSObject = {
    size: containerSize,
    position: "absolute",
    bottom: sizes[2] + 12 - containerHalf,
    right: sizes[2] + 12 - containerHalf,
  };

  return (
    <MotionList
      ref={ref}
      sx={containerStyle}
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      exit={{ scale: 0 }}
    >
      {links.map((link, i) => (
        <li key={i} style={{ position: "absolute", ...setIconPos(i) }}>
          <SocialLink link={link} size={iconSize} />
        </li>
      ))}
    </MotionList>
  );
};

const SocialPanel = forwardRef(SocialPanelWithRef);

export default SocialPanel;
