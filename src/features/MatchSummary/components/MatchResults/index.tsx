import React from 'react';
import FavoriteCheckbox from '@common/components/FavoriteCheckbox';
import Image from 'next/image';

import * as Styled from './index.styled';

const MatchResults = () => (
  <Styled.MatchResults>
    <Styled.TeamContainer>
      <Styled.TeamContent>
        <Styled.IconContainer>
          <FavoriteCheckbox size="large" />
        </Styled.IconContainer>
        <Styled.TeamInfo>
          <Styled.TeamLogoContainer>
            <Image
              src="https://www.flashscore.ua/res/image/data/tMir8iCr-88qkLtMj.png"
              width="58px"
              height="58px"
              alt="logo"
            />
          </Styled.TeamLogoContainer>
          <Styled.WinnerName>Баварія Мюнхен</Styled.WinnerName>
        </Styled.TeamInfo>
      </Styled.TeamContent>
    </Styled.TeamContainer>

    <Styled.ResultsContainer>
      <Styled.Results>
        <Styled.StartDate>04.10.2022 19:45</Styled.StartDate>
        <Styled.Score>5 - 0</Styled.Score>
        <Styled.GameStatus>Завершено</Styled.GameStatus>
      </Styled.Results>
    </Styled.ResultsContainer>

    <Styled.TeamContainer>
      <Styled.TeamContent>
        <Styled.TeamInfo>
          <Styled.TeamLogoContainer>
            <Image
              src="https://www.flashscore.ua/res/image/data/UBo6ihh5-6sEsOLMh.png"
              width="58px"
              height="58px"
              alt="logo"
            />
          </Styled.TeamLogoContainer>
          <Styled.TeamName>Вікторія Пльзень</Styled.TeamName>
        </Styled.TeamInfo>
        <Styled.IconContainer>
          <FavoriteCheckbox size="large" />
        </Styled.IconContainer>
      </Styled.TeamContent>
    </Styled.TeamContainer>
  </Styled.MatchResults>
);

export default MatchResults;
