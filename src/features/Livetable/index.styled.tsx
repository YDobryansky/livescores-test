import styled from 'styled-components';
import { Box, Paper as MuiPaper, ToggleButtonGroup as MuiToggleButtonGroup } from '@mui/material';

export const Paper = styled(props => <MuiPaper component="section" {...props} />)``;

export const FiltersGroup = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const Matches = styled(Box)`
  margin-top: ${({ theme }) => theme.spacing(2)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.2)};
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.secondary.dark};
  cursor: pointer;
`;

export const ToggleButtonGroup = styled(MuiToggleButtonGroup)`
  gap: ${({ theme }) => theme.spacing(1)};

  .MuiToggleButtonGroup-grouped {
    padding: 5px 14px;
    line-height: 1.6;
    color: ${({ theme }) => theme.palette.text.secondary};
    background-color: ${({ theme }) => theme.palette.background.default};
    border: 0;
    border-radius: ${({ theme }) => theme.spacing(1)};

    &.Mui-disabled {
      border: 0;
    }

    &.Mui-selected {
      color: ${({ theme }) => theme.palette.primary.contrastText};
      background-color: ${({ theme }) => theme.palette.primary.main};
      pointer-events: none;
    }

    &:hover {
      background-color: ${({ theme }) => theme.palette.grey[300]};
    }

    &:not(:first-of-type) {
      border-radius: ${({ theme }) => theme.spacing(1)};
    }

    &:first-of-type {
      border-radius: ${({ theme }) => theme.spacing(1)};
    }
  }
`;
