/**
 * @Component RHFImageUploader
 * 이미지 업로드 RHF 컴포넌트
 * children으로 ReactNode를 반환하는 함수를 받는다.
 */

import React, { ReactNode, useId, useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Box, styled } from "@mui/material";

type Props = {
  name: string;
  children: (value, error) => ReactNode;
};

const RHFImageUploader = ({ name, children }: Props) => {
  const { control: controlHR } = useFormContext();
  const id = useId();

  const [viewValueHR, setViewValueHR] = useState<string | undefined>(undefined);

  return (
    <Controller
      name={name}
      control={controlHR}
      render={({ field, fieldState: { error } }) => {
        return (
          <Box sx={{ display: "flex", margin: "0 auto" }}>
            <FileLabel htmlFor={id}>
              {children(typeof field.value === "string" ? field.value : viewValueHR, error)}
            </FileLabel>
            <FileInput
              id={id}
              type="file"
              onChange={(e) => {
                const { files } = e.target;
                if (!files?.item(0)) {
                  return;
                }
                const reader = new FileReader();
                const file = files[0];
                if (file.size > 31457280) {
                  return;
                }
                reader.onloadend = () => {
                  setViewValueHR(reader.result as string);
                  field.onChange(file);
                };
                reader.readAsDataURL(file);
              }}
            />
          </Box>
        );
      }}
    />
  );
};

export default RHFImageUploader;

const FileLabel = styled("label")({
  cursor: "pointer",
});

const FileInput = styled("input")({
  width: 0,
  height: 0,
  visibility: "hidden",
});
