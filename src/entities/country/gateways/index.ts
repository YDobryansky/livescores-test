import axios from 'axios';
import type Country from '@entities/country/types';

export const getCountries = async (): Promise<Country[]> => {
  const {
    data: { response },
  } = await axios.get(`${process.env.API_URL}/countries`, {
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
    },
  });
  return response;
};
