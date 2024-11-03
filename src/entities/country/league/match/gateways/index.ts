import axios from 'axios';
import { format } from 'date-fns';
import ukLocale from 'date-fns/locale/uk';
import type { Status } from '@entities/country/league/match/fixture/types';
import type LeagueMatch from '@entities/country/league/match/types';

export const getMatches = async (
  date: Date,
  statuses: Status['short'][],
): Promise<LeagueMatch[]> => {
  const {
    data: { response },
  } = await axios.get(`${process.env.API_URL}/fixtures`, {
    params: {
      date: format(date, 'yyyy-MM-dd', { locale: ukLocale }),
      status: statuses.join('-') || null,
    },
    headers: { 'X-RapidAPI-Key': process.env.API_KEY },
  });

  return response;
};
