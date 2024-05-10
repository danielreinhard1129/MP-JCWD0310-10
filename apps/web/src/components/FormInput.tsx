"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { FormikHandlers } from "formik";

interface FormInputProps {
  name: string;
  label: string;
  type: string;
  value: string;
  placeholder: string;
  isError: boolean;
  error: string | undefined;
  handleChange: FormikHandlers["handleChange"];
  handleBlur: FormikHandlers["handleBlur"];
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  type = "text",
  isError,
  placeholder,
  value,
  error,
  handleChange,
  handleBlur,
}) => {
  return (
    <>
      <Label
        htmlFor={name}
        className={` text-gray-600 ${isError ? "text-red-500" : "text-black"}`}
      >
        {label}
      </Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
        className="{isError ? `border-red-500` : ``} mt-0 block w-full rounded-md border border-gray-300 p-3 shadow-sm"
        // className='shadow-sm"{isError ? `border-red-500` : ``} block w-full rounded-md border border-gray-300 p-3'
      />
      {isError ? <div className="text-xs text-red-500">{error}</div> : null}
    </>
  );
};

export default FormInput;
