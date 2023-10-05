"use client";
import { Input, Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";


export type IFormTextAreaProps = {
  rows?:number;
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  defaultValue?:''
};

const FormTextArea = ({
  name,
  rows,
  size,
  value,
  placeholder,
  label,
  defaultValue
}: IFormTextAreaProps) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
            <Input.TextArea rows={rows} placeholder={placeholder}  {...field} defaultValue={value} />
            
          
          
          
        )}
      />
    </>
  );
};

export default FormTextArea;
