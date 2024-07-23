"use client";
import PageTitle from "@/app/components/EventCreate/PageTitle";
import { Button, Form, FormCombobox, FormDate, FormInput } from "@breeze/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { getDDLCities } from "./-api/city";
import { CityData } from "@/interfaces/CityData";
import { SelectOption } from "@/interfaces/SelectOption";
import { tempcities } from "./-api/tempdata";
import { format } from "date-fns";
import { useRouter } from "next/navigation";

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
  city: z.number(),
});

export default function EventCreateFirstStep() {
  const router = useRouter();
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

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    localStorage.setItem(
      "event_first_step_data",
      JSON.stringify({
        ...data,
        start_date: format(data.start_date, "yyyy-MM-dd"),
      })
    );
    router.push("/event-create/second-step");
  };

  return (
    <main className="flex flex-col md:items-center">
      <div className="w-1/5">
        <PageTitle title="Launch an event" current={1} total={4} />
      </div>
      <div className="w-1/5 pt-4">
        <Form {...methods}>
          <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="mb-10">
              <FormInput
                name="name"
                label="Event Name"
                placeholder="Event Name"
              />
            </div>
            <div className="mb-10">
              <FormDate name="start_date" label="Start Date" />
            </div>
            <div className="mb-10 flex gap-10 items-center">
              <FormInput name="start_time" type="time" label="Start Time" />
              <p>to</p>
              <FormInput name="end_time" type="time" label="End Time" />
            </div>
            <div className="mb-10">
              <FormInput
                name="place"
                label="Place/Address"
                placeholder="Place/Address"
              />
            </div>
            <div className="mb-10">
              <FormCombobox
                name="city"
                label="City"
                // options={cities as SelectOption[]}
                options={tempcities as SelectOption[]}
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              // disabled={!methods.formState.isValid}
            >
              Next
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
