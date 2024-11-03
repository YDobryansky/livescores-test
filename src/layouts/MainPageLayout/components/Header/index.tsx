import React from 'react';
import Logo from 'public/images/logo.svg';

import * as Styled from './index.styled';

const Header: React.FC = () => (
  <Styled.Header>
    <Styled.HeaderContent>
      <Logo />
      <Styled.HeaderButtons>
        <Styled.SearchButton />
        <Styled.LoginButton>Вхід</Styled.LoginButton>
        <Styled.MenuButton />
      </Styled.HeaderButtons>
    </Styled.HeaderContent>
  </Styled.Header>
);

export default Header;
