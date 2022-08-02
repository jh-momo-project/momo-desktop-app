import { ElementType, forwardRef } from "react";
import { Typography, TypographyProps } from "@mui/material";
import { textStyle } from "../../theme/typography";

interface ITextProps extends TypographyProps {
  size: keyof typeof textStyle;
  weight?: "regular" | "medium" | "bold";
  component?: ElementType;
}

const Text = forwardRef((props: ITextProps, ref) => {
  const { children, size, weight = "regular", component = "p", sx, ...rest } = props;

  const style = !!sx ? { ...textStyle[size][weight], ...sx } : { ...textStyle[size][weight] };

  return (
    <Typography component={component} sx={style} ref={ref} {...rest}>
      {children}
    </Typography>
  );
});

export default Text;
