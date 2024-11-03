import React from 'react';
import Image from 'next/image';
import FavoriteCheckbox from '@common/components/FavoriteCheckbox';
import { Accordion, AccordionDetails } from '@mui/material';
import type { AccordionProps } from '@mui/material';
import type LeagueMatch from '@entities/country/league/match/types';

import * as Styled from './index.styled';

type LeagueAccordionProps = {
  league: LeagueMatch['league'];
  children: React.ReactNode;
} & AccordionProps;

const LeagueAccordion: React.FC<LeagueAccordionProps> = ({ league, children, ...props }) => (
  <Accordion {...props}>
    <Styled.AccordionSummary>
      <FavoriteCheckbox size="large" />
      <Styled.EventTitle>
        <Image src={league.logo} alt={league.country} width="18" height="13" />
        {league.country.toUpperCase()}: {league.name}
      </Styled.EventTitle>
    </Styled.AccordionSummary>
    <AccordionDetails>{children}</AccordionDetails>
  </Accordion>
);

export default LeagueAccordion;
