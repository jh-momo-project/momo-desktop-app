/**
 * @Component RHFTextField
 */

import { useFormContext, Controller } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";
import { textStyle } from "@theme/typography";

type Props = {
  name: string;
};

const RHFTextField = ({ name, type = "text", sx, ...other }: Props & TextFieldProps) => {
  const { control } = useFormContext();

  const style = !!sx
    ? { ".MuiInput-input": { ...textStyle[14].regular }, ...sx }
    : { ".MuiInput-input": { ...textStyle[14].regular } };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          variant="standard" // default
          type={type}
          error={!!error}
          helperText={error?.message || " "}
          autoComplete="off"
          FormHelperTextProps={{
            sx: {
              mt: "1px",
            },
          }}
          sx={style}
          {...other}
        />
      )}
    />
  );
};

export default RHFTextField;
