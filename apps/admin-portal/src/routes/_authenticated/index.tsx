import { createFileRoute } from "@tanstack/react-router";

/*
 * This file is used to handle authenticated routes after user logout and login. That's all.
 * */
export const Route = createFileRoute("/_authenticated/")({
  component: () => <div>Hello /_authenticated/!</div>,
});
