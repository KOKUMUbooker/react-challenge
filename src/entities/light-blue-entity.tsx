import { Box } from '@mui/material';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';

import { BottomFacingElement } from '../components';
import { LIGHT_BLUE } from '../constants';

const bulbIcon = (
  <TrendingUpRoundedIcon
    style={{ color: LIGHT_BLUE, fontWeight: 900, fontSize: '5rem' }}
  />
);

interface LightBlueEntityProps {
  styles?: React.CSSProperties;
}

export function LightBlueEntity({ styles }: LightBlueEntityProps) {
  return (
    <>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          ...styles,
        }}
      >
        <BottomFacingElement
          color={LIGHT_BLUE}
          icon={bulbIcon}
          infoCardNumber={'05'}
          styles={{}}
        />
      </Box>
    </>
  );
}
