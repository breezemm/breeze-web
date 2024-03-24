import {initAuth} from "@breeze/react-auth";
import {tokenStorage} from "~/lib/storage";
import {getAuthUser, SignInCredentialDTO, signInWithEmailAndPassword, signOutAuthUser} from "~/routes/auth/-api";

const handleUserResponse = async (data: { access_token: string }) => {
  const {access_token}: {
    access_token: string;
  } = data;

  tokenStorage.setToken(access_token);

  return await getAuthUser()
}

const signInUser = async (data: SignInCredentialDTO) => {
  const response = await signInWithEmailAndPassword(data);
  return await handleUserResponse(response);
}

const signOutUser = async () => {
  await signOutAuthUser();
  tokenStorage.clearToken();
  window.location.assign(window.location.origin as unknown as string);
}

export const {useAuthUser, useSignInUser, useSignOutUser} = initAuth({
  signInUserFn: signInUser,
  signOutUserFn: signOutUser,
  getAuthUserFn: getAuthUser,
  signUpUserFn: async () => Promise.resolve(),
})
