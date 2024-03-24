import {
  Button,
  buttonVariants,
  cn,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@breeze/ui';
import {createFileRoute, Link, Outlet, redirect} from '@tanstack/react-router'
import {authStore} from "~/store";
import HomeIcon from "~/assets/icons/HomeIcon.tsx";
import WalletIcon from "~/assets/icons/WalletIcon.tsx";
import VerifiedBadgeIcon from "~/assets/icons/VerifiedBadgeIcon.tsx";
import UserProfileIcon from "~/assets/icons/UserProfileIcon.tsx";
import Logo from '~/assets/icons/Logo';
import LogoutIcon from "~/assets/icons/LogoutIcon.tsx";
import {useAuthUser, useSignOutUser} from "~/lib/auth.ts";


export const Route = createFileRoute('/_authenticated')({
  component: Auth,
  beforeLoad: () => {
    const auth = authStore.state.user
    if (!auth) {
      throw redirect({
        to: '/auth/login',
      })
    }
  }
})

const links = [
  {name: "Home", to: "/dashboard/home", icon: HomeIcon},
  {name: "Wallet", to: "/dashboard/wallet", icon: WalletIcon},
  {name: "Verify", to: "/dashboard/verify", icon: VerifiedBadgeIcon},
]

function Auth() {
  const auth = useAuthUser()

  const signOutUser = useSignOutUser({})

  const onLogout = () => {
    signOutUser.mutate({})

  }

  return (
    <div className="flex flex-col h-screen">
      <header className="flex flex-row justify-between w-full px-2 py-2 gap-2 border-b">
        <Logo/>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <UserProfileIcon/>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-52 w-full md:w-64 h-44 top-36 left-72 mr-5 p-4 rounded-md gap-4 border border-neutral-400">
            <DropdownMenuLabel className="w-40 h-10 text-6 p-2 gap-2">
              {auth.isLoading && "Loading..."}
              {auth.isSuccess && auth.data?.name}
            </DropdownMenuLabel>
            <DropdownMenuLabel>
              <Button variant={"default"}
                      className="w-40 w-full h-10 flex border rounded-md justify-start items-center text-left p-2 gap-2">
                <UserProfileIcon className="w-7 h-8"/> My Account</Button>
            </DropdownMenuLabel>
            <DropdownMenuLabel>
              <Button
                onClick={onLogout}
                variant={"link"}
                className="w-40 flex h-10 justify-start items-center w-full text-destructive text-left gap-2 p-2 rounded-md mb-2 hover:no-underline	">
                <LogoutIcon/> Logout</Button>
            </DropdownMenuLabel>

          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      <section className="flex h-full">
        <nav className="flex flex-col p-10 gap-y-6 border-r">
          {links.map((link) => {
            return (
              <Button
                key={link.to}
                variant="ghost"
                className="flex justify-start items-center w-full text-left gap-4 py-2" asChild>
                <Link
                  to={link.to}
                  preload="intent"
                  activeProps={{
                    className: cn(
                      buttonVariants({variant: "default"}),
                      "hover:text-white flex justify-start items-center w-full text-left gap-4 py-2"
                    )
                  }}>
                  <link.icon className="fill-white"/>
                  {link.name}
                </Link>
              </Button>
            )
          })}
        </nav>
        <section className="p-10 w-full">
          <Outlet/>
        </section>
      </section>
    </div>
  )
}
