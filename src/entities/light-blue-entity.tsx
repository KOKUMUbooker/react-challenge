import { Box } from '@mui/material';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';

import { BottomFacingElement } from '../components';
import { LIGHT_BLUE } from '../constants';

const bulbIcon = (
  <TrendingUpRoundedIcon
    style={{ color: LIGHT_BLUE, fontWeight: 900, fontSize: '5rem' }}
  />
);

export function LightBlueEntity() {
  return (
    <>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          style={{
            backgroundColor: LIGHT_BLUE,
            width: '16rem',
            height: '8rem',
            position: 'absolute',
            borderRadius: '8rem 8rem 0 0',
            top: '15%',
          }}
        ></Box>
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
