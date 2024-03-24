import {createFileRoute, Link, redirect, useNavigate} from '@tanstack/react-router'
import {useSignInUser} from "~/lib/auth.ts";
import {Button, Form, FormControl, FormField, FormItem, FormMessage, Input} from "@breeze/ui";
import {authStore} from "~/store";
import {flushSync} from "react-dom";
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import EyeOpenIcon from "~/assets/icons/EyeOpenIcon";
import EyeCloseIcon from "~/assets/icons/EyeCloseIcon";

import {useState} from "react";
import Logo from "~/assets/icons/Logo";
import LoadingSpinner from "~/assets/icons/LoadingSpinner";

export const Route = createFileRoute('/auth/login')({
  component: Login,
  beforeLoad: ({context: {auth}}) => {
    if (auth) {
      throw redirect({
        to: "/dashboard/home"
      })
    }
  }
})

const formSchema = z.object({
  email: z.string()
    .email("Invalid email address.")
    .min(1, {message: "This field has to be filled."}),
  password: z
    .string()
    .min(1, {message: "This field has to be filled."}),
})


function Login() {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)

  const LoadingIconWithText = () => {
    return <div role="status" className="flex gap-3 items-center">
      <span>Loading</span>
      <LoadingSpinner/>
    </div>
  }

  useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })


  const signInUser = useSignInUser({
    onSuccess: (user) => {
      flushSync(() => {
        authStore.setState(state => {
          return {
            ...state,
            user,
          }
        })
        navigate({
          to: '/dashboard/home'
        })
      })
    }
  })


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })


  async function onSubmit(data: z.infer<typeof formSchema>) {
    await signInUser.mutateAsync(data)
  }

  const handlePasswordShow = () => {
    setShowPassword(!showPassword)
  }
  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <Logo/>
      <div className="flex flex-col w-80 mt-8 items-center">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-2xl text-[var(--neutral-009)] font-bold">Welcome !</h1>
          <p className="font-normal text-base text-[var(--neutral-009)]">This is breeze’s Admin Dashboard.</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" mt-20  w-full flex flex-col  ">
            <div className="flex flex-col mb-20 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Username or email"
                             className="border-e-0 border-s-0 border-[var(--netural-009)] placeholder-red-300  border-t-0 border-b-2 rounded-none shadow-none focus-visible:ring-0 focus-visible:outline-none"/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex justify-between items-center  border-[var(--neutral-009)] border-b-2">
                        <Input type={showPassword ? "text" : "password"} placeholder="Password" {...field}
                               className="border-none rounded-none shadow-none focus-visible:ring-0 focus-visible:outline-none"/>
                        {
                          showPassword ?
                            <EyeOpenIcon className="cursor-pointer w-5 h-5" onClick={handlePasswordShow}/> :
                            <EyeCloseIcon className="w-5 h-5 cursor-pointer" onClick={handlePasswordShow}/>
                        }

                      </div>


                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full ">
              {signInUser.isPending ? <LoadingIconWithText/> : "Login"}
            </Button>
            <Link to="/" className="underline w-full mt-6 text-center font-semibold text-base tracking-tight">Forget
              Password?</Link>
          </form>
        </Form>

      </div>


    </div>
  )
}

