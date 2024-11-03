import React from 'react';
import Image from 'next/image';

import * as Styled from './index.styled';

const Breadcrumbs = () => (
  <Styled.BreadcrumbContainer>
    <Styled.BreadcrumbContent>
      <Styled.SoccerIcon />
      Футбол
    </Styled.BreadcrumbContent>
    <Styled.BreadcrumbContent>
      <Styled.ImgWrapper>
        <Image
          src="https://www.flashscore.ua/res/_fs/build/world.b7d16db.png"
          width="18px"
          height="12px"
          alt="world"
        />
      </Styled.ImgWrapper>
      ЄВРОПА: ЛІГА ЧЕМПІОНІВ - ГРУПОВИЙ ЕТАП - РАУНД 3
    </Styled.BreadcrumbContent>
  </Styled.BreadcrumbContainer>
);

export default Breadcrumbs;
