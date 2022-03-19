import { ReactNode } from "react";
import { ThemeUICSSObject } from "theme-ui";
import { taskbarHeight } from "../../themes";

type DesktopProps = {
  children: ReactNode;
};

export default function Desktop({ children }: DesktopProps) {
  const desktopStyle: ThemeUICSSObject = {
    height: `calc(100% - ${taskbarHeight}px)`,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return <section sx={desktopStyle}>{children}</section>;
}
