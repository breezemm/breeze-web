import { CityData } from "@/interfaces/CityData";
import { axios } from "@/lib/axios";

export const getCities = async () => {
  const response = await axios.get(`users/cities`);

  return response.data.data;
};

export const getDDLCities = async () => {
  const response = await axios.get(`users/cities`);

  return response.data.data?.map((c: CityData) => {
    return {
      value: c.id,
      label: c.name,
    };
  });
};
