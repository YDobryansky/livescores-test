import styled from 'styled-components';
import { Grid } from '@mui/material';
import { Sports, Stadium as StadiumIcon, Groups } from '@mui/icons-material';

export const Section = styled(props => <Grid container direction="column" {...props} />)`
  margin-bottom: 20px !important;
`;
export const Header = styled.div`
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

export const SectionItem = styled(props => <Grid item {...props} />)`
  display: flex;
  margin: 16px 24px;
  margin: ${({ theme }) => theme.spacing(2, 3)};
  height: 0 !important;
`;

export const LeftSideEl = styled.div`
  width: 50%;
  display: flex;
  aling-items: center;
  justify-content: flex-start;
`;

export const RightSideEl = styled.div`
  width: 50%;
  display: flex;
  aling-items: center;
  justify-content: flex-end;
`;

export const WhistleIcon = styled(Sports)`
  color: ${({ theme }) => theme.palette.support.darker};
  width: 16px;
  height: 16px;
  margin-right: ${({ theme }) => theme.spacing(1)};
`;

export const Stadium = styled(StadiumIcon)`
  color: ${({ theme }) => theme.palette.support.darker};
  width: 16px;
  height: 16px;
  margin-right: ${({ theme }) => theme.spacing(1)};
`;

export const ViewersIcon = styled(Groups)`
  color: ${({ theme }) => theme.palette.support.darker};
  width: 16px;
  height: 16px;
  margin-right: ${({ theme }) => theme.spacing(1)};
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.palette.support.darker};
  display: flex;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.4px;
  margin-right: ${({ theme }) => theme.spacing(1.5)};
  text-transform: uppercase;
`;

export const Value = styled.span`
  font-weight: 700;
  text-align: right;
  font-size: 13px;
`;
