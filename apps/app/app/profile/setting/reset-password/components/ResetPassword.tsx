"use client";
import { useState } from "react";
import {
  Button,
  Form,
  Input,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@breeze/ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";

const formSchema = z.object({
  email: z
    .string()
    .email("Invalid email address.")
    .min(1, { message: "This field has to be filled." }),
  verificationCode: z
    .string()
    .min(1, { message: "This field has to be filled." }),
  newPassword: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." }),
  confirmPassword: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .refine((value) => value === formSchema.newPassword, {
      message: "Passwords do not match",
    }),
});

function ResetPassword() {
  const [step, setStep] = useState(3);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const emailForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema.pick({ email: true })),
    defaultValues: {
      email: "",
    },
  });

  const verificationForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema.pick({ verificationCode: true })),
    defaultValues: {
      verificationCode: "",
    },
  });

  const resetPasswordForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(
      formSchema.pick({ newPassword: true, confirmPassword: true })
    ),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const handlePasswordShow = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordShow = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmitEmail = async (data: z.infer<typeof formSchema>) => {
    // Handle submission for email form
    console.log(data);
    setStep(2);
  };

  const onSubmitVerification = async (data: z.infer<typeof formSchema>) => {
    // Handle submission for verification form
    console.log(data);
    setStep(3);
  };

  const onSubmitResetPassword = async (data: z.infer<typeof formSchema>) => {
    // if (data.newPassword !== data.confirmPassword) {
    //   // Passwords don't match, handle accordingly (display error message, etc.)
    //   console.log("Passwords don't match");
    //   return;
    // }

    // Handle submission for reset password form
    console.log(data);
    setStep(4);
  };

  return (
    <div className="w-full max-w-96">
      <h3 className="text-lg font-semibold mb-7 text-center border-b pb-2 border-neutral-5">
        Reset Password
      </h3>
      <div className="px-6 flex flex-col gap-9">
        {step === 1 && (
          <Form {...emailForm}>
            <form
              onSubmit={emailForm.handleSubmit(onSubmitEmail)}
              className=" flex flex-col gap-9"
            >
              <p className="text-center">
                Enter the email you used to create this account. So, we can sent
                you a code.
              </p>
              <FormField
                control={emailForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Email"
                        className="border-b-neutral-9 text-base"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Next</Button>
            </form>
          </Form>
        )}
        {step == 2 && (
          <Form {...verificationForm}>
            <form
              onSubmit={verificationForm.handleSubmit(onSubmitVerification)}
              className=" flex flex-col gap-9"
            >
              <p className="text-center">
                A 6 - digit code has sent to correct.address@gmail.com
              </p>
              <FormField
                control={verificationForm.control}
                name="verificationCode"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Verification Code"
                        className="border-b-neutral-9 text-base"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col gap-2 items-center">
                <p>You can request a new code in 120s.</p>
                <Link href={"/request"} className=" underline text-neutral-5">
                  Request
                </Link>
              </div>
              <Button type="submit">Next</Button>
            </form>
          </Form>
        )}
        {step === 3 && (
          <Form {...resetPasswordForm}>
            <form
              onSubmit={resetPasswordForm.handleSubmit(onSubmitResetPassword)}
              className=" flex flex-col gap-9"
            >
              <p>Let’s reset your password.</p>
              <FormField
                control={resetPasswordForm.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex justify-between items-center  border-[var(--neutral-009)] border-b-2">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="New Password"
                          {...field}
                          className="border-none rounded-none shadow-none focus-visible:ring-0 focus-visible:outline-none"
                        />
                        {/* {showPassword ? (
                        <EyeOpenIcon
                          className="cursor-pointer w-5 h-5"
                          onClick={handlePasswordShow}
                        />
                      ) : (
                        <EyeCloseIcon
                          className="w-5 h-5 cursor-pointer"
                          onClick={handlePasswordShow}
                        />
                      )} */}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={resetPasswordForm.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex justify-between items-center  border-[var(--neutral-009)] border-b-2">
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm Password"
                          {...field}
                          className="border-none rounded-none shadow-none focus-visible:ring-0 focus-visible:outline-none"
                        />
                        {/* {showConfirmPassword ? (
                        <EyeOpenIcon
                          className="cursor-pointer w-5 h-5"
                          onClick={handleConfirmPasswordShow}
                        />
                      ) : (
                        <EyeCloseIcon
                          className="w-5 h-5 cursor-pointer"
                          onClick={handleConfirmPasswordShow}
                        />
                      )} */}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <p>Your password must include: </p>
                <ul className="list-disc pl-6 ">
                  <li>8 letters</li>
                  <li>a special character (@,#,$,*)</li>
                  <li>a capital letter</li>
                </ul>
              </div>
              <Button type="submit">Next</Button>
            </form>
          </Form>
        )}
      </div>
    </div>
  );
}

export default ResetPassword;
