import React from "react";

import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTrigger,
} from "@breeze/ui";

import AppleStore from "@/app/assets/apple_store.svg";
import GoogleStore from "@/app/assets/google_store.svg";
import Image from "next/image";
import { cn } from "@/utils";

const DownloadDialogBox = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger className={cn("", className)}>{children}</DialogTrigger>
      <DialogOverlay className="bg-overlaycolor  backdrop-blur-sm" />

      <DialogContent
        style={{ borderRadius: "1rem" }}
        className="w-80  flex justify-center  flex-col items-center gap-12 p-16"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg font-bold text-neutral-10">Download Now!</p>
          <p className="text-base">
            Get an account for{" "}
            <span className="text-green-7 font-bold">FREE</span>.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src={AppleStore} alt="appleStore" />
          <Image src={GoogleStore} alt="appleStore" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadDialogBox;
