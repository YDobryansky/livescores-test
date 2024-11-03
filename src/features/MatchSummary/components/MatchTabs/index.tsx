import React from 'react';
import { Tab } from '@mui/material';

import * as Styled from './index.styled';

const MatchTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Styled.TabsList value={value} onChange={handleChange}>
      <Tab label="Огляд" />
      <Tab label="Статистика" />
      <Tab label="Склади" />
      <Tab label="Онлайн" />
    </Styled.TabsList>
  );
};

export default MatchTabs;
