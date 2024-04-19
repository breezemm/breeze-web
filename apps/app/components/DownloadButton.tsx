import React from "react";
import DownloadDialogBox from "@/components/DownloadDialogBox";
import Link from "next/link";
import { Button } from "@breeze/ui";
const DownloadButton = () => {
  return (
    <>
      <DownloadDialogBox>
        <Button
          className="bg-neutral-9 font-semibold  items-center justify-center  text-neutral-1 hidden h-11 w-40 rounded-md  text-center  md:flex "
          asChild>
          <Link href="/login">Login</Link>
        </Button>

        <div className="bg-green-6 flex h-10 w-10 items-center justify-center rounded-md md:hidden">
          Login
        </div>
      </DownloadDialogBox>
    </>
  );
};

export default DownloadButton;
