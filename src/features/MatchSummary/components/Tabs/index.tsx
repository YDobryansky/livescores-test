import React from 'react';

import * as Styled from './index.styled';

const Tabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Styled.BoxContainer sx={{ width: '100%' }}>
      <Styled.BoxContainer sx={{ borderBottom: 1, borderTop: 1, borderColor: 'divider' }}>
        <Styled.TabsContainer value={value} onChange={handleChange}>
          <Styled.TabEl label="Матч" />
          <Styled.TabEl label="Коефіцієнти" />
          <Styled.TabEl label="H2H" />
          <Styled.TabEl label="Таблиця" />
          <Styled.TabEl label="Фотозвіт" />
        </Styled.TabsContainer>
      </Styled.BoxContainer>
    </Styled.BoxContainer>
  );
};

export default Tabs;
