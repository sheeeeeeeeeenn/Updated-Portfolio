import Image from "next/image";
import { Box, ThemeUICSSObject } from "theme-ui";
import StyledButton from "../../atoms/styled/Button";

export default function LeftPanel() {
  const avatarSize = 220;
  const avatarUrl = `https://gravatar.com/avatar/d4028f77abfbb3f71c7b4d3a8e0b7b86?s=${avatarSize}`;

  const buttonStyle: ThemeUICSSObject = {
    mt: 3,
    mx: [1, null, 0],
    display: ["inline-block", null, "flex"],
    width: ["unset", null, "100%"],
  };

  return (
    <Box sx={{ textAlign: "center", flexShrink: 0 }}>
      <Image src={avatarUrl} alt="Shenmar" width={avatarSize} height={avatarSize} quality={100} priority />
      <Box>
        <StyledButton sx={buttonStyle} iconName="AiOutlineProfile" href="https://drive.google.com/file/d/1eEhU8tILuBb4lP3LOdjWWcDNoN6ZTpF2/view?usp=sharing">
          Resume
        </StyledButton>
        <StyledButton
          sx={buttonStyle}
          iconName="AiOutlineMail"
          href="mailto:shenmarbonifacio123@gmail.com?subject=Hello There!"
        >
          Email
        </StyledButton>
      </Box>
    </Box>
  );
}
