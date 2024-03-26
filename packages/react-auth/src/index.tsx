import { useCallback } from "react";
import {
  MutationFunction,
  QueryFunction,
  QueryKey,
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

export interface ReactQueryAuthConfig<
  TUser,
  TSignUpCredentials,
  TSignInCredentials,
> {
  getAuthUserFn: QueryFunction<TUser>;
  signUpUserFn: MutationFunction<TUser, TSignUpCredentials>;
  signInUserFn: MutationFunction<TUser, TSignInCredentials>;
  signOutUserFn: MutationFunction<unknown, unknown>;
  userQueryKey?: QueryKey;
}

export function initAuth<TUser, TError, TSignUpCredentials, TSignInCredentials>(
  config: ReactQueryAuthConfig<TUser, TSignUpCredentials, TSignInCredentials>,
) {
  const {
    getAuthUserFn,
    signUpUserFn,
    signInUserFn,
    signOutUserFn,
    userQueryKey = ["authenticated-user"],
  } = config;

  const useAuthUser = (
    options?: Omit<
      UseQueryOptions<TUser, TError, TUser, QueryKey>,
      "queryKey" | "queryFn"
    >,
  ): UseQueryResult<TUser, TError> =>
    useQuery({
      ...options,
      queryFn: getAuthUserFn,
      queryKey: userQueryKey,
    });

  const useSignUpUser = (
    options?: Omit<
      UseMutationOptions<TUser, TError, TSignUpCredentials, TUser>,
      "mutationFn"
    >,
  ) => {
    const queryClient = useQueryClient();

    const setUser = useCallback(
      (data: TUser | null) => queryClient.setQueryData(userQueryKey, data),
      [queryClient],
    );

    return useMutation({
      ...options,
      mutationFn: signUpUserFn,
      onSuccess: (user, ...rest) => {
        setUser(user);
        options?.onSuccess?.(user, ...rest);
      },
    });
  };

  const useSignInUser = (
    options?: Omit<
      UseMutationOptions<TUser, TError, TSignInCredentials, TUser>,
      "mutationFn"
    >,
  ) => {
    const queryClient = useQueryClient();

    const setUser = useCallback(
      (data: TUser | null) => queryClient.setQueryData(userQueryKey, data),
      [queryClient],
    );

    return useMutation({
      mutationFn: signInUserFn,
      ...options,
      onSuccess: (user, ...rest) => {
        setUser(user);
        options?.onSuccess?.(user, ...rest);
      },
    });
  };

  const useSignOutUser = (
    options: Omit<
      UseMutationOptions<unknown, TError, unknown, unknown>,
      "mutationFn"
    >,
  ) => {
    const queryClient = useQueryClient();

    const setUser = useCallback(
      (data: TUser | null) => queryClient.setQueryData(userQueryKey, data),
      [queryClient],
    );

    return useMutation({
      ...options,
      mutationFn: signOutUserFn,
      onSuccess: (...args) => {
        queryClient.clear();
        setUser(null);
        options.onSuccess?.(...args);
      },
    });
  };

  return {
    useAuthUser,
    useSignUpUser,
    useSignInUser,
    useSignOutUser,
  };
}
