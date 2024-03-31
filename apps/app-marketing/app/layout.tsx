import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@breeze/ui/globals.css";
import "./globals.css";
import CustomLayout from "../components/CustomLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Breeze",
  description: "Breeze | The event planning app",
    icons:'./icon.svg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <CustomLayout>{children}</CustomLayout>
      </body>
    </html>
  );
}
