import {createFileRoute, useNavigate} from '@tanstack/react-router'
import {Card, CardContent, CardHeader, CardTitle,} from "@breeze/ui"
import UserIcon from "~/assets/icons/UserIcon.tsx";
import TicketIcon from "~/assets/icons/TicketIcon.tsx";
import { Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,} from "@breeze/ui";
import { Link } from "@tanstack/react-router";

import HomeIcon from "~/assets/icons/HomeIcon";


export const Route = createFileRoute('/_authenticated/dashboard/home/')({
  component: Home,
})


function Home() {
  const navigate = useNavigate()

  return (
    <div>
      <div className=" flex gap-2 w-28 h-10 px-4 py-2 top-36 left-64 ">
      <Breadcrumb>
      <BreadcrumbList>
            <BreadcrumbItem >
            <BreadcrumbPage className="cursor-pointer">
              <Link to="/dashboard/home">
                <div className=" flex gap-2 items-center">
                <HomeIcon className="w-5 h-5"/> 
                Home
              </div>
            </Link>
            </BreadcrumbPage>
        </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
      <div className="flex gap-8">
        <Card className="w-52 bg-zinc-800" onClick={() => navigate({
          to: '/dashboard/home/users'
        })}>
          <CardHeader>
            <CardTitle className="text-[18px] text-white">User Base</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-end gap-2 text-normal">
            <p className='text-white font-bold'>0.00</p>
            <UserIcon className="w-10 h-10"/>
          </CardContent>
        </Card>

        <Card className="w-52 bg-zinc-800" onClick={() => navigate({
          to: '/dashboard/home/events'
        })}>
          <CardHeader>
            <CardTitle className="text-[18px] text-white">Events</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-end gap-2 text-normal">
            <p className='text-white font-bold'>0.00</p>
            <TicketIcon className="w-10 h-10"/>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
