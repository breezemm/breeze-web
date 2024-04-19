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
import { Textarea } from "../textarea";

interface FormProps {
  name: string;
  label?: string;
  formDescription?: string;
  placeholder?: string;
  inputClassName?: string;
}

export function FormTextarea({
  name,
  label,
  formDescription,
  placeholder,
  inputClassName,
}: FormProps) {
  const methods = useFormContext();

  return (
    <FormField
      control={methods.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          {label && <FormLabel htmlFor={name} >{label}</FormLabel>}
          <FormControl>
            <Textarea
              placeholder={placeholder}
              {...field}
              className={cn(
                "resize-none border-b border-neutral-10 px-0",
                inputClassName
              )}
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
