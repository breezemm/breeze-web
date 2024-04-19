import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@breeze/ui";
import { register } from "module";
import Image from "next/image";
import { RegisterOptions, useFormContext } from "react-hook-form";

interface FormFileProps {
  name: string;
  label?: string;
  disableAsterisk?: boolean;
  formConWidth?: string;
  formDescription?: string;
  accept?: string;
  previewImage?: any;
}

export default function FormFile({
  name,
  formConWidth,
  formDescription,
  previewImage,
  ...formInputProps
}: FormFileProps) {
  const methods = useFormContext();

  return (
    <>
      <FormLabel htmlFor={name}>
        <div className="bg-neutral-3 h-[150px] flex items-center justify-center relative">
          <div className="flex flex-col items-center justify-center absolute z-20">
            <div className="w-[25px] h-[25px] text-lg bg-neutral-2 text-white flex items-center justify-center rounded-full">
              +
            </div>
            <p className="text-xs text-neutral-2">Add a cover photo</p>
          </div>
          <div className="w-full h-full absolute z-10 bg-overlaycolor"></div>
          {previewImage && (
            <Image
              src={previewImage}
              alt="Preview"
              width={500}
              height={150}
              className="w-full h-[150px] object-contain absolute top-0"
            />
          )}
        </div>
      </FormLabel>
      <FormControl>
        <Input
          id={name}
          {...methods.register(name)}
          type="file"
          hidden
          {...formInputProps}
        />
      </FormControl>
      {formDescription && <FormDescription>{formDescription}</FormDescription>}
      <FormMessage />
    </>
  );
}
