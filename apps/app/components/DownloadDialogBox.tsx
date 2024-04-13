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
        Login
      </DialogContent>
    </Dialog>
  );
};

export default DownloadDialogBox;
