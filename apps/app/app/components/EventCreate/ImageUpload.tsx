// import useImageResize from "@/hooks/useImageResize";
import { useEffect, useRef, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import FormFile from "./FormFile";
import Image from "next/image";

const ImageUpload = ({
  label,
  // getData,
  name,
  acceptFileTypes = "image/png, image/jpeg, image/jpg",
  disableAsterisk,
}: {
  label?: string;
  // getData: (data: any) => void;
  name: string;
  acceptFileTypes?: string;
  disableAsterisk?: boolean;
}) => {
  const methods = useFormContext();

  // Upload Image
  const imageFileSize = useRef(0);
  const [hasReachedFileSizeLimit, setHasReachedFileSizeLimit] = useState(false);
  const [showImage, setShowImage] = useState<any>(null);
  const [previewImage, setPreviewImage] = useState<any>(null);

  const imageFileWatch = useWatch({
    control: methods.control,
    name: name,
  });
  const imageFileHandler = () => {
    console.log(imageFileWatch);

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

  return (
    <>
      
    </>
  );
};
export default ImageUpload;
