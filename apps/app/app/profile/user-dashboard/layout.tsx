import UserDashboardNavbar from "@/app/profile/user-dashboard/UserDashboardNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center justify-center">
      <UserDashboardNavbar />
      {children}
    </div>
  );
}
