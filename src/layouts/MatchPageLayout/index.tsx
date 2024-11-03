import React from 'react';

import * as Styled from './index.styled';

type MatchPageLayoutProps = {
  children: React.ReactNode;
};

const MatchPageLayout: React.FC<MatchPageLayoutProps> = ({ children }) => (
  <Styled.Page>
    <Styled.Header>
      <Styled.HeaderContent>
        <Styled.Logotype />
      </Styled.HeaderContent>
    </Styled.Header>
    <Styled.MainSection>{children}</Styled.MainSection>
  </Styled.Page>
);

export default MatchPageLayout;
