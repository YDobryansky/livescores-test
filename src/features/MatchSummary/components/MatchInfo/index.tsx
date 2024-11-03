import React from 'react';

import * as Styled from './index.styled';

const MatchInfo = () => (
  <Styled.Section>
    <Styled.Header>
      <Styled.Title>ІНФОРМАЦІЯ ПРО МАТЧ</Styled.Title>
    </Styled.Header>

    <Styled.SectionItem>
      <Styled.LeftSideEl>
        <Styled.WhistleIcon />
        <Styled.Text>Суддя:</Styled.Text>
      </Styled.LeftSideEl>
      <Styled.RightSideEl>
        <Styled.Value>Dabanovic N. (Mne)</Styled.Value>
      </Styled.RightSideEl>
    </Styled.SectionItem>

    <Styled.SectionItem>
      <Styled.LeftSideEl>
        <Styled.Stadium />
        <Styled.Text>Стадіон:</Styled.Text>
      </Styled.LeftSideEl>
      <Styled.RightSideEl>
        <Styled.Value>Альянц Арена (Мюнхен)</Styled.Value>
      </Styled.RightSideEl>
    </Styled.SectionItem>

    <Styled.SectionItem>
      <Styled.LeftSideEl>
        <Styled.ViewersIcon />
        <Styled.Text>Глядачі:</Styled.Text>
      </Styled.LeftSideEl>
      <Styled.RightSideEl>
        <Styled.Value>75 000</Styled.Value>
      </Styled.RightSideEl>
    </Styled.SectionItem>
  </Styled.Section>
);

export default MatchInfo;
