import { Container, Grid } from '@mui/material';
import styled from 'styled-components';

// TODO: Try to avoid '!important' in styles
export const MatchResults = styled(props => <Grid container {...props} />)`
  width: 90%;
  margin: auto !important;
  margin-top: ${({ theme }) => theme.spacing(3)} !important;
`;

export const TeamContainer = styled(props => <Grid item xs={4} {...props} />)`
  padding: 0 !important;
`;

export const ResultsContainer = styled(props => <Grid item xs {...props} />)`
  padding: 0 !important;
`;

export const TeamContent = styled(props => <Grid container {...props} />)``;

export const TeamInfo = styled(props => <Grid item xs={10} {...props} />)`
  display: flex;
  flex-direction: column;
  padding: 0 !important;
`;

export const TeamLogoContainer = styled(Container)`
  width: 84px;
  height: 84px;
  padding: ${({ theme }) => theme.spacing(1.5)};
  border: 1px solid #eee;
  border-radius: 12px;
  margin-bottom: 5px;
`;

export const TeamLogo = styled.img`
  width: 58px;
  height: 58px;
`;

export const TeamName = styled.span`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 16px;
  margin: auto;
`;

export const WinnerName = styled.span`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 16px;
  font-weight: 700;
  margin: auto;
`;

export const Results = styled(props => <Grid container direction="column" {...props} />)``;

export const StartDate = styled(props => <Grid item {...props} />)`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 13px;
  padding: 0 !important;
  margin: auto;
`;

export const Score = styled(props => <Grid item {...props} />)`
  font-family: 'Kdam Thmor Pro', sans-serif;
  font-weight: 800;
  font-size: 46px;
  color: ${({ theme }) => theme.palette.text.primary};
  padding: 0 !important;
  margin: auto;
`;

export const GameStatus = styled.span`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  font-size: 13px;
`;

export const IconContainer = styled.span`
  display: flex;
  align-items: center !important;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;
