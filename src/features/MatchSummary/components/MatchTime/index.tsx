import React from 'react';
import type { TimeNum } from '@entities/country/league/match/time/types';

import * as Styled from './index.styled';

type MatchTimeProps = {
  timeNum: TimeNum;
};

const icons = {
  goal: <Styled.SoccerIcon />,
  substitution: <Styled.SubstitutionIcon />,
  yellow_card: <Styled.YellowCardIcon />,
  var: <Styled.VarIcon>VAR</Styled.VarIcon>,
};

const MatchTime: React.FC<MatchTimeProps> = ({ timeNum }) => {
  const { participants } = timeNum;

  return (
    <Styled.Section>
      <Styled.Header>
        <Styled.Title>{timeNum.timeNum}</Styled.Title>
        <Styled.TotalScore>{timeNum.totalScore}</Styled.TotalScore>
      </Styled.Header>
      {participants.map(el => {
        const teamItem = (
          <>
            <Styled.TimeEl>{el.time}</Styled.TimeEl>
            <Styled.ScoreGroup>
              {icons[el.incident]}
              <Styled.ScoreItem>{el.score}</Styled.ScoreItem>
            </Styled.ScoreGroup>
            <Styled.PlayerName>{el.playerName}</Styled.PlayerName>
            {el.comment && <Styled.ElComment>{el.comment}</Styled.ElComment>}
            {el.assist && <Styled.ElComment>{el.assist}</Styled.ElComment>}
          </>
        );
        return el.team === 'first' ? (
          <Styled.TeamItem key={el.id}>{teamItem}</Styled.TeamItem>
        ) : (
          <Styled.TeamItem
            key={el.id}
            style={{ flexDirection: 'row-reverse', marginRight: '24px' }}
          >
            {teamItem}
          </Styled.TeamItem>
        );
      })}
    </Styled.Section>
  );
};

export default MatchTime;
