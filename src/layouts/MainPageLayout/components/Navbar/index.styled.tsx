import styled from 'styled-components';
import { Box, Container, Tab, Tabs } from '@mui/material';

export const Navbar = styled(props => <Box component="nav" {...props} />)`
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

export const NavbarContent = styled(Container)``;

export const NavTabs = styled(props => <Tabs indicatorColor="primary" {...props} />)`
  .MuiTab-root {
    color: ${({ theme }) => theme.palette.text.disabled};
  }

  .Mui-selected {
    color: ${({ theme }) => theme.palette.secondary.contrastText};
  }
`;

export const NavTab = styled(props => <Tab iconPosition="start" disableRipple {...props} />)``;
