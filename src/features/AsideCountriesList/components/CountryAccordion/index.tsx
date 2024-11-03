import React, { useEffect, useState } from 'react';
import CountryLeague from '@features/AsideCountriesList/components/CountryAccordion/components/CountryLeague';
import * as LeaguesGateway from '@entities/country/league/gateways';
import { AccordionDetails, Skeleton } from '@mui/material';
import { SportNameId } from '@enums/index';
import type League from '@entities/country/league/types';
import type Country from '@entities/country/types';

import * as Styled from './index.styled';

type CountryAccordionProps = {
  country: Country;
  sportNameId: SportNameId;
};

const CountryAccordion: React.FC<CountryAccordionProps> = ({ country, sportNameId }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [countryLeagues, setCountryLeagues] = useState<League[]>([]);

  useEffect(() => {
    if (expanded && !countryLeagues.length) {
      (async () => {
        const countryEvents = await LeaguesGateway.getCountryLeagues(country.code);
        setCountryLeagues(countryEvents);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded, country, sportNameId]);

  return (
    <Styled.Accordion expanded={expanded} onChange={(_, expanded) => setExpanded(expanded)}>
      <Styled.AccordionSummary>
        <Styled.CountryTitle>{country.name}</Styled.CountryTitle>
      </Styled.AccordionSummary>
      <AccordionDetails>
        {countryLeagues.length > 0 ? (
          countryLeagues.map(league => <CountryLeague key={league.id} league={league} />)
        ) : (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        )}
      </AccordionDetails>
    </Styled.Accordion>
  );
};

export default CountryAccordion;
