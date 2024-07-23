"use client";

import { useFormContext } from "react-hook-form";
import { useState } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { Input } from "../input";
import { cn } from "../utils/cn";

interface FormProps {
  name: string;
  label?: string;
  formDescription?: string;
  placeholder?: string;
  inputClassName?: string;
  type?: string;
}

export function FormInput({
  name,
  label,
  formDescription,
  placeholder,
  inputClassName,
  type = "text",
}: FormProps) {
  const methods = useFormContext();

  return (
    <FormField
      control={methods.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
          <FormControl>
            <Input
              type={type}
              id={name}
              placeholder={placeholder}
              {...field}
              className={cn("border-b border-neutral-10 px-0", inputClassName)}
            />
          </FormControl>
          {formDescription && (
            <FormDescription>{formDescription}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
