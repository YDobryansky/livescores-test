import React, { useMemo } from 'react';
import useLeaguesMatches from './hooks/useLeaguesMatches';
import Link from 'next/link';
import LeagueAccordion from '@features/Livetable/components/LeagueAccordion';
import DatePicker from '@features/Livetable/components/DatePicker';
import Match from '@features/Livetable/components/Match';
import { ToggleButton } from '@mui/material';
import { SportNameId } from '@enums/index';
import { filterButtons } from './configs';
import { FilterStatuses } from './hooks/useLeaguesMatches/configs';
import type { LeagueItem } from '@entities/country/league/match/types';

import * as Styled from './index.styled';

type LivetableProps = {
  sportNameId: SportNameId;
};

const Livetable: React.FC<LivetableProps> = ({ sportNameId }) => {
  const { matches, date, setDate, matchesFilter, setMatchesFilter } =
    useLeaguesMatches(sportNameId);

  const collator = new Intl.Collator('en');

  const getSortedByCountry = (leagues: LeagueItem[]) =>
    leagues.sort((a, b) => collator.compare(a.country, b.country));

  const leagues: LeagueItem[] = useMemo(
    () =>
      getSortedByCountry(
        Object.values(
          matches.reduce((acc, { league, fixture, ...match }) => {
            acc[league.id] ??= { ...league, matches: [] };
            acc[league.id].matches.push({ ...fixture, ...match });
            return acc;
          }, {}),
        ),
      ),
    [matches],
  );

  return (
    <Styled.Paper>
      <Styled.FiltersGroup>
        <Styled.ToggleButtonGroup
          value={matchesFilter}
          exclusive
          onChange={(_e, matchesFilter: FilterStatuses) => setMatchesFilter(matchesFilter)}
          aria-label="filter sport events"
        >
          {filterButtons.map(({ value, label, ariaLabel }) => (
            <ToggleButton key={value} value={value} aria-label={ariaLabel}>
              {label}
            </ToggleButton>
          ))}
        </Styled.ToggleButtonGroup>
        <DatePicker date={date} onChange={setDate} style={{ marginLeft: 'auto' }} />
      </Styled.FiltersGroup>
      <Styled.Matches>
        {leagues.map(({ matches, ...league }) => (
          <LeagueAccordion key={league.id} league={league} defaultExpanded>
            {matches.map(match => (
              <Link key={match.id} href={`/leagues/${league.id}/matches/${match.id}`} passHref>
                <Styled.Link>
                  <Match key={match.id} match={match} />
                </Styled.Link>
              </Link>
            ))}
          </LeagueAccordion>
        ))}
      </Styled.Matches>
    </Styled.Paper>
  );
};

export default Livetable;
