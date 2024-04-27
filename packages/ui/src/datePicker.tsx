"use client";

import * as React from "react";
import { format } from "date-fns";
import { ChevronDown } from "lucide-react";
// import { userDataStore } from "../../../apps/app/store/User-Data-Store";
import { Button } from "./button";
import { Calendar } from "./date-picker/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./date-picker/pophover";
import { cn } from "./utils/cn";

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>();
  // const { userBithday, updateUserBirthday } = userDataStore((state) => ({
  //   userBithday: state.userBirth,
  //   updateUserBirthday: state.updateUserBirthday,
  // }));

  // const handleDateData = () => {
  //   updateUserBirthday(date);
  // };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[250px] rounded-none border border-black font-normal mt-5 mb-16",
            !date && "text-muted-foreground"
          )}>
          {date ? (
            format(date, "PPP")
          ) : (
            <div className="flex">
              <span className="mr-10">DD/MM/YY</span>

              <ChevronDown className="px-1 py-1 text-right text-3xl" />
            </div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
