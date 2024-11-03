import styled from 'styled-components';
import { Tabs } from '@mui/material';

export const TabsList = styled(Tabs)`
  margin-left: ${({ theme }) => theme.spacing(1.2)};
  border: none;

  .Mui-selected {
    color: ${({ theme }) => theme.palette.primary.contrastText};
    background: ${({ theme }) => theme.palette.primary.main};
  }

  .MuiTabs-flexContainer {
    gap: ${({ theme }) => theme.spacing(1.5)};
  }

  .MuiTabs-indicator {
    display: none;
  }

  .MuiTab-root {
    min-width: 0;
    min-height: 12px;
    height: 12px;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.palette.support.main};
    color: ${({ theme }) => theme.palette.text.secondary};
    font-size: 12px;
    padding: ${({ theme }) => theme.spacing(1.8, 1.5)};
    margin: 0;
  }
`;
