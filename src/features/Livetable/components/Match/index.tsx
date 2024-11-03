import React from 'react';
import FavoriteCheckbox from '@common/components/FavoriteCheckbox';
import type { MatchItem } from '@entities/country/league/match/types';

import * as Styled from './index.styled';

type MatchProps = {
  match: MatchItem;
};

const Match: React.FC<MatchProps> = ({ match }) => {
  const {
    teams: { home: homeTeam, away: awayTeam },
    score,
    status,
  } = match;

  const formatPart = (part?: number) => !!part && `(${part || '-'})`;

  return (
    <Styled.MatchGrid>
      <Styled.Check>
        <FavoriteCheckbox size="large" defaultChecked={false} />
      </Styled.Check>
      <Styled.StageOrTime>{status.long}</Styled.StageOrTime>
      <Styled.HomeLogo alt="Home team" src={homeTeam.logo} />
      <Styled.AwayLogo alt="Away team" src={awayTeam.logo} />
      <Styled.HomeParticipant>{homeTeam.name}</Styled.HomeParticipant>
      <Styled.AwayParticipant>{awayTeam.name}</Styled.AwayParticipant>
      {/* TODO: Update properties for displaying score */}
      <Styled.HomeScore>{score.fulltime.home || '-'}</Styled.HomeScore>
      <Styled.AwayScore>{score.fulltime.away || '-'}</Styled.AwayScore>
      <Styled.HomePart>{formatPart(score.halftime.home)}</Styled.HomePart>
      <Styled.AwayPart>{formatPart(score.halftime.away)}</Styled.AwayPart>
    </Styled.MatchGrid>
  );
};

export default Match;
