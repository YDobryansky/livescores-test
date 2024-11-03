import React from 'react';
import FavoriteCheckbox from '@common/components/FavoriteCheckbox';
import { Link } from '@mui/material';
import type League from '@entities/country/league/types';

import * as Styled from './index.styled';

type CountryLeagueProps = {
  league: League;
};

const CountryLeague: React.FC<CountryLeagueProps> = ({ league }) => (
  <Styled.CountryLeague>
    <Link href="#" sx={{ flex: 1 }}>
      {league.name}
    </Link>
    <FavoriteCheckbox defaultChecked={false} />
  </Styled.CountryLeague>
);

export default CountryLeague;
