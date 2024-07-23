"use client";

import { CalendarIcon, Check, ChevronsUpDown, Command } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../form";
import { cn } from "../utils/cn";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../date-picker/pophover";
import { Button } from "../button";
import { format } from "date-fns";
import { Calendar } from "../date-picker/calendar";

interface FormDateProps {
  name: string;
  label?: string;
  btnClassName?: string;
  formDescription?: string;
}

export const FormDate = ({
  name,
  label,
  btnClassName,
  formDescription,
}: FormDateProps) => {
  const methods = useFormContext();
  const [open, setOpen] = useState(false);

  return (
    <FormField
      control={methods.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          {label && <FormLabel>{label}</FormLabel>}
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  aria-expanded={open}
                  className={cn(
                    "w-[240px] pl-3 text-left font-normal",
                    !field.value && "text-muted-foreground",
                    btnClassName
                  )}
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                // onSelect={() => {
                //   methods.setValue(name, field.value);
                //   setOpen(false);
                // }}
                initialFocus
                onSelect={field.onChange}
                // onSelect={() => {
                //   field.onChange();
                // //   setOpen(false);
                // }}
                // disabled={(date) =>
                //   date > new Date() || date < new Date("1900-01-01")
                // }
              />
            </PopoverContent>
          </Popover>
          {formDescription && (
            <FormDescription>{formDescription}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
