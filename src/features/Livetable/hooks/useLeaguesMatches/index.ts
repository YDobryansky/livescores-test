import { useEffect, useState } from 'react';
import filterStatuses, { type FilterStatuses } from './configs';
import * as MatchesGateway from '@entities/country/league/match/gateways';
import { SportNameId } from '@enums/index';
import type LeagueMatch from '@entities/country/league/match/types';

const useLeaguesMatches = (sportNameId: SportNameId) => {
  const [date, setDate] = useState<Date>(new Date());
  const [matches, setMatches] = useState<LeagueMatch[]>([]);
  const [matchesFilter, setMatchesFilter] = useState<FilterStatuses>('ALL');

  useEffect(() => {
    (async () => {
      const matches = await MatchesGateway.getMatches(date, filterStatuses[matchesFilter]);
      setMatches(matches);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, sportNameId, matchesFilter]);

  return { date, setDate, matches, matchesFilter, setMatchesFilter };
};

export default useLeaguesMatches;
