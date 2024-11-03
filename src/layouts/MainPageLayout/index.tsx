import Header from '@layouts/MainPageLayout/components/Header';
import {
  SportsBasketball,
  SportsHandball,
  SportsHockey,
  SportsSoccer,
  SportsTennis,
  SportsVolleyball,
} from '@mui/icons-material';
import React from 'react';
import Navbar from './components/Navbar';

import * as Styled from './index.styled';

type PublicLayoutProps = {
  aside: React.ReactNode;
  children: React.ReactNode;
};

const MainPageLayout: React.FC<PublicLayoutProps> = ({ aside, children }) => (
  <>
    <Header />
    <Navbar
      tabs={[
        { icon: <SportsSoccer />, value: '/', label: 'Футбол' },
        { icon: <SportsBasketball />, value: '/basketball', label: 'Баскетбол' },
        { icon: <SportsTennis />, value: '/tenis', label: 'Теніс' },
        { icon: <SportsHockey />, value: '/hokey', label: 'Хокей' },
        { icon: <SportsVolleyball />, value: '/volleyball', label: 'Волейбол' },
        { icon: <SportsHandball />, value: '/handball', label: 'Гандбол' },
      ]}
    />
    <Styled.MainSection>
      <Styled.AsideSection>{aside}</Styled.AsideSection>
      <Styled.CenterSection>{children}</Styled.CenterSection>
    </Styled.MainSection>
  </>
);

export default MainPageLayout;
