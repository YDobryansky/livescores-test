import styled from 'styled-components';
import { Box, Tabs, Tab } from '@mui/material';

export const BoxContainer = styled(props => <Box {...props} />)`
  margin: ${({ theme }) => theme.spacing(3, 0, 2)};
`;

export const TabsContainer = styled(props => <Tabs aria-label="tabs" {...props} />)`
  margin-left: ${({ theme }) => theme.spacing(2.5)};
`;

export const TabEl = styled(props => <Tab {...props} />)`
  min-width: 0 !important;
`;
