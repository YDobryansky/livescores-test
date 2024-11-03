import styled from 'styled-components';
import { Grid } from '@mui/material';
import { SportsSoccer, Cached, Rectangle } from '@mui/icons-material';

export const Section = styled(props => <Grid container direction="column" {...props} />)`
  margin-bottom: 20px !important;
`;

export const Header = styled(props => <Grid item {...props} />)`
  margin: ${({ theme }) => theme.spacing(0, 1.5)};
  padding: ${({ theme }) => theme.spacing(0.8, 1.5)};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.support.main};
  display: flex;
`;

export const Title = styled(props => <Grid item xs {...props} />)`
  color: ${({ theme }) => theme.palette.support.darker};
  line-height: 16px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const TotalScore = styled.span`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.support.darker};
`;

export const TeamItem = styled(props => <Grid item {...props} />)`
  display: flex;
  align-items: center !important;
  margin: ${({ theme }) => theme.spacing(1, 1.5, 1, 3)};
`;

export const TimeEl = styled.span`
  font-weight: 700;
  min-width: 20px;
  color: ${({ theme }) => theme.palette.support.darker};
  font-size: 13px;
`;

export const ScoreGroup = styled.div`
  display: flex;
  align-items: center !important;
  border: 1px solid #eee;
  border-radius: 8px;
  height: 28px;
  margin: ${({ theme }) => theme.spacing(0, 1)};
  padding: ${({ theme }) => theme.spacing(0, 1)};
`;

export const SoccerIcon = styled(SportsSoccer)`
  width: 16px;
  height: 16px;
`;

export const SubstitutionIcon = styled(Cached)`
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const YellowCardIcon = styled(Rectangle)`
  width: 17px;
  height: 28px;
  color: #ffdb58;
  transform: rotate(90deg);
`;

export const VarIcon = styled.span`
  font-weight: 700;
  font-size: 7px;
  padding: 1px;
  border: 1.5px solid ${({ theme }) => theme.palette.common.black};
  border-radius: 5px;
`;

export const ScoreItem = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.palette.secondary.dark};
  margin-left: ${({ theme }) => theme.spacing(0.5)};
`;

export const PlayerName = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 13px;
`;

export const ElComment = styled.div`
  color: ${({ theme }) => theme.palette.support.darker};
  font-size: 13px;
  margin: ${({ theme }) => theme.spacing(0, 0.5)};
`;
