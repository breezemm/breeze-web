import { Link, createFileRoute } from "@tanstack/react-router";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@breeze/ui";

import HomeIcon from "~/assets/icons/HomeIcon";
import EventDataTable from "./-components/events-table/DataTable";
import { EventData } from "./-components/event";
import { eventcolumns } from "./-components/events-table/columns";

export const Route = createFileRoute("/_authenticated/dashboard/home/events")({
  component: Event,
});

function Event() {
  return (
    <div>
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
                <Link to="/dashboard/home/events">Events</Link>
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <EventDataTable columns={eventcolumns} data={EventData} />
    </div>
  );
}
