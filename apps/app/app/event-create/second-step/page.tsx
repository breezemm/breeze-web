"use client";
import PageTitle from "@/app/components/EventCreate/PageTitle";
import {
  Button,
  Form,
  FormCombobox,
  FormDate,
  FormInput,
  FormTextarea,
} from "@breeze/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { CityData } from "@/interfaces/CityData";
import { SelectOption } from "@/interfaces/SelectOption";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import ImageUpload from "@/app/components/EventCreate/ImageUpload";
import FormFile from "@/app/components/EventCreate/FormFile";
import { useEffect, useRef, useState } from "react";

interface EventCreateSecondStepForm {
  image: any;
  description: string;
}

const formSchema = z.object({
  // image: z.unknown(),
  description: z.string(),
});

export default function EventCreateFirstStep() {
  const router = useRouter();
  const methods = useForm<EventCreateSecondStepForm>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
  });

  //Upload Image
  const imageFileSize = useRef(0);
  const [hasReachedFileSizeLimit, setHasReachedFileSizeLimit] = useState(false);
  const [previewImage, setPreviewImage] = useState<any>(null);

  const imageFileWatch = useWatch({
    control: methods.control,
    name: "image",
  });
  const imageFileHandler = () => {
    // if (imageFileWatch) {
    //   const reader = new FileReader();
    //   imageFileSize.current = imageFileWatch[0]?.size;
    //   reader.onload = async () => {
    //     if (typeof reader.result === "string") {
    //       if (imageFileSize.current >= 5242880) {
    //         setHasReachedFileSizeLimit(true);
    //         return null;
    //       } else {
    //         setPreviewImage(reader.result);
    //         const localResizedFileBase64: any = await useImageResize(
    //           imageFileWatch[0]
    //         );
    //         getData(localResizedFileBase64);
    //       }
    //     }
    //   };
    //   reader.readAsDataURL(imageFileWatch[0]);
    // }
    if (imageFileWatch) {
      const reader = new FileReader();
      imageFileSize.current = imageFileWatch[0]?.size;
      reader.onload = async () => {
        setPreviewImage(reader.result);
        // if (typeof reader.result === "string") {
        //   if (imageFileSize.current >= 5242880) {
        //     setHasReachedFileSizeLimit(true);
        //     return null;
        //   } else {
        //     const localResizedFileBase64: any = await useImageResize(
        //       imageFileWatch[0]
        //     );
        //     getData(localResizedFileBase64);
        //   }
        // }
      };
      reader.readAsDataURL(imageFileWatch[0]);
    }
  };
  useEffect(() => {
    imageFileHandler();
    return () => {};
  }, [imageFileWatch]);

  const onSubmit = (data: EventCreateSecondStepForm) => {
    console.log(data);
  };

  return (
    <main className="flex flex-col md:items-center">
      <div className="w-1/5">
        <PageTitle title="Launch an event" current={2} total={4} />
      </div>
      <div className="w-1/5 pt-4">
        <Form {...methods}>
          <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="mb-10">
              <FormFile
                name={"image"}
                accept={"image/png, image/jpeg, image/jpg"}
                previewImage={previewImage}
              />
            </div>
            <div className="mb-10">
              {/* <FormInput
                name="description"
                label="Tell us more about"
                placeholder="Tap here to start writing"
                inputClassName="border-none"
              /> */}
              <FormTextarea
                name="description"
                label="Tell us more about"
                placeholder="Tap here to start writing"
                inputClassName="border-none focus:border-none min-h-[200px]"
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
