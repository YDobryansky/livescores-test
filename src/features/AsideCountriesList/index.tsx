import React, { useEffect, useState } from 'react';
import CountryAccordion from '@features/AsideCountriesList/components/CountryAccordion';
import * as CountriesGateway from '@entities/country/gateways';
import { Divider } from '@mui/material';
import { SportNameId } from '@enums/index';
import type Country from '@entities/country/types';

import * as Styled from './index.styled';

type AsideCountriesListProps = {
  sportNameId: SportNameId;
};

const AsideCountriesList: React.FC<AsideCountriesListProps> = ({ sportNameId }) => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    (async () => {
      const countries = await CountriesGateway.getCountries();
      setCountries(countries);
    })();
  }, [sportNameId]);

  return (
    countries && (
      <>
        <Styled.Title>
          Країни
          <Divider />
        </Styled.Title>
        <Styled.Content>
          {countries.map(country => (
            <CountryAccordion key={country.name} country={country} sportNameId={sportNameId} />
          ))}
        </Styled.Content>
      </>
    )
  );
};

export default AsideCountriesList;
