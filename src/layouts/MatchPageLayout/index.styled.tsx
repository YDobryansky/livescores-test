import { Box, Container } from '@mui/material';
import Logo from 'public/images/logo.svg';
import styled from 'styled-components';

export const Page = styled(Container)`
  display: flex;
  flex-direction: column;
  max-width: 688px;
  padding: 0;
  background-color: ${({ theme }) => theme.palette.common.white};
  font-family: Arial, sans-serif;
`;

export const Header = styled(props => <Box component="header" {...props} />)`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  display: flex;
  height: 52px;
`;

export const HeaderContent = styled(Container)`
  display: flex;
  align-items: center;
`;

export const Logotype = styled(Logo)`
  height: 20px;
`;

export const MainSection = styled(Container)`
  margin: 0;
  padding: 0;
`;
