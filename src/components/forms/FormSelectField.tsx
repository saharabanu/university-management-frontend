"use client";
import { Input, Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";

export type SelectOptions = {
    label:string;
    value: string
}
export type ISelectFieldProps = {
  options?: SelectOptions[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  defaultValue?:SelectOptions
};

const FormSelectField = ({
  name,
  size,
  value,
  placeholder,
  label,
  options,
  defaultValue
}: ISelectFieldProps) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field : {value, onChange}}) => (
          <Select onChange={onChange} options={options} value={value} size={size} placeholder={placeholder} style={{width:'100%'}}/>
        )}
      />
    </>
  );
};

export default FormSelectField;
