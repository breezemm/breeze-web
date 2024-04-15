"use client";
import PageTitle from "@/app/components/EventCreate/PageTitle";
import {
  Button,
  DatePickerDemo,
  Form,
  FormCombobox,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Label,
} from "@breeze/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { getDDLCities } from "./-api/city";
import { CityData } from "@/interfaces/CityData";
import { SelectOption } from "@/interfaces/SelectOption";

interface EventCreateFirstStepForm {
  name: string;
  start_date: string;
  start_time: string;
  end_time: string;
  place: string;
}

const formSchema = z.object({
  name: z.string().nonempty(),
  start_date: z.date(),
  start_time: z.string().nonempty(),
  end_time: z.string().nonempty(),
  place: z.string().nonempty(),
});

export default function EventCreateFirstStep() {
  const methods = useForm<z.infer<typeof formSchema>>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
  });

  const { data: cities } = useQuery<SelectOption[]>({
    queryKey: ["city"],
    queryFn: () => {
      return getDDLCities();
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {};

  return (
    <main className="flex flex-col md:items-center">
      <div className="w-1/5">
        <PageTitle title="Launch an event" current={1} total={4} />
      </div>
      <div className="w-1/5 pt-4">
        <Form {...methods}>
          <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="mb-10">
              <FormField
                control={methods.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="name">Event Name</FormLabel>
                    <FormControl>
                      <Input
                        id="name"
                        placeholder="Event Name"
                        {...field}
                        className="border-b border-neutral-10 px-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-10">
              <FormField
                control={methods.control}
                name="start_date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Start Date</FormLabel>
                    <DatePickerDemo />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-10 flex gap-10 items-center">
              <FormField
                control={methods.control}
                name="start_time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="name">Start Time</FormLabel>
                    <FormControl>
                      <Input
                        id="start_time"
                        type="time"
                        {...field}
                        className="border-b border-neutral-10 px-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p>to</p>
              <FormField
                control={methods.control}
                name="end_time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="end_time">End Time</FormLabel>
                    <FormControl>
                      <Input
                        id="end_time"
                        type="time"
                        {...field}
                        className="border-b border-neutral-10 px-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-10">
              <FormField
                control={methods.control}
                name="place"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="place">Place/Address</FormLabel>
                    <FormControl>
                      <Input
                        id="place"
                        placeholder="Place/Address"
                        {...field}
                        className="border-b border-neutral-10 px-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-10">
              <FormCombobox
                name="city"
                options={cities as SelectOption[]}
                label="City"
              />
            </div>
            <Button className="w-full">Next</Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
