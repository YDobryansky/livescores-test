import styled from 'styled-components';
import { Breadcrumbs, Link } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

export const BreadcrumbContainer = styled(props => (
  <Breadcrumbs separator="›" fontSize="large" aria-label="breadcrumb" {...props} />
))`
  padding: 5px 20px;
  border-bottom: 1px solid #eee;
`;

export const BreadcrumbContent = styled(props => (
  <Link underline="hover" key="1" color="inherit" {...props} />
))`
  display: flex;
  aling-items: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.support.darker};
  font-size: 12px;
  font-weight: 700;
`;

export const SoccerIcon = styled(SportsSoccerIcon)`
  height: 17px;
  width: 17px;
  margin: ${({ theme }) => theme.spacing(0, 1, 0, 0)};
`;

export const ImgWrapper = styled.span`
  margin: 2px 8px 0 0;
`;
