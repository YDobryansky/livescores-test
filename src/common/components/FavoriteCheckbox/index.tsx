import styled from 'styled-components';
import { getRgba } from '@common/utils/palette';
import { Star, StarBorder } from '@mui/icons-material';
import { Checkbox } from '@mui/material';
import theme from '@theme';

const FavoriteCheckbox = styled(props => (
  <Checkbox
    icon={<StarBorder sx={{ opacity: 0.5 }} />}
    checkedIcon={<Star htmlColor={theme.palette.common.yellow} />}
    onClick={e => {
      e.stopPropagation();
      if (props.onClick) {
        props.onClick(e);
      }
    }}
    {...props}
  />
))`
  &.Mui-checked {
    color: ${({ theme }) => theme.palette.common.yellow};

    &:hover {
      background-color: ${({ theme }) => getRgba(theme.palette.common.yellow, 0.2)};
    }
  }
`;

export default FavoriteCheckbox;
