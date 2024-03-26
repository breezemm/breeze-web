import { axios } from "~/lib/axios";

export const getUserProfileWithUsername = async (username: string) => {
  const response = await axios.get(`users/${username}/profile`);

  return response.data.data;
};
