import axios from 'axios';
import type League from '@entities/country/league/types';
import type Country from '@entities/country/types';

export const getCountryLeagues = async (countryCode: Country['code']): Promise<League[]> => {
  const {
    data: { response },
  } = await axios.get(`${process.env.API_URL}/leagues`, {
    params: { code: countryCode },
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
    },
  });
  return response.map(({ league }) => league);
};
