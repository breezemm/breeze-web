import { createFileRoute } from "@tanstack/react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@breeze/ui";
import { Link } from "@tanstack/react-router";
import HomeIcon from "~/assets/icons/HomeIcon";
import UserBaseTable from "./-components/userbase-table/DataTable";
import { columns } from "./-components/userbase-table/columns";
import { UserData } from "./-components/user";

export const Route = createFileRoute("/_authenticated/dashboard/home/users")({
  component: User,
});

function User() {
  return (
    <div className="w-[100%]">
      <div className=" flex gap-2 w-28 h-10 px-4 py-2 top-36 left-64 ">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="cursor-pointer">
                <Link to="/dashboard/home">
                  <div className="flex gap-2 items-center">
                    <HomeIcon className="w-5 h-5" />
                    Home
                  </div>
                </Link>
              </BreadcrumbLink>
              <BreadcrumbSeparator />
              <BreadcrumbPage className="cursor-pointer">
                <Link to="/dashboard/home/users">Userbase</Link>
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <UserBaseTable columns={columns} data={UserData} />
    </div>
  );
}
