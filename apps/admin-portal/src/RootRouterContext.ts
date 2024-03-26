import { QueryClient } from "@tanstack/react-query";
import { User } from "~/store";

export interface RootRouterContext {
  queryClient: QueryClient;
  auth: User | undefined;
}
