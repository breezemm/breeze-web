import {useAuthUser} from "~/lib/auth.ts";
import {authStore} from "~/store";

export function useAuth() {
  const auth = useAuthUser()

  if (auth.isSuccess) {
    authStore.setState(state => {
      return {
        ...state,
        user: auth.data,
      }
    })
  }

  return {
    isLoading: auth.isLoading,
    user: auth.data,
  }
}
