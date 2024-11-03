import styled from 'styled-components';
import { Container, Grid } from '@mui/material';

export const MainSection = styled(props => (
  <Container component="main">
    <Grid container spacing={2} {...props} />
  </Container>
))`
  margin-top: 0;
`;

export const AsideSection = styled(props => <Grid item xs={1.9} component="aside" {...props} />)`
  padding-left: 0 !important;
`;

export const CenterSection = styled(props => <Grid item xs={8} {...props} />)`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;
