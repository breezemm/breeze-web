import { axios } from "~/lib/axios.ts";

export interface SignInCredentialDTO {
  email: string;
  password: string;
}

export const signInWithEmailAndPassword = async (
  credentials: SignInCredentialDTO,
) => {
  const response = await axios.post("/users/sign-in", credentials);

  return response.data.data;
};

export const signOutAuthUser = async () => {
  try {
    await axios.post("/users/sign-out");
  } catch (e) {
    throw "Error signing out";
  }
};

export const getAuthUser = async () => {
  const response = await axios.get("/users/me");

  return response.data.data;
};
