import { Box } from '@mui/material';
import AdsClickRoundedIcon from '@mui/icons-material/AdsClickRounded';

import { BottomFacingElement } from '../components';
import { PURPLE } from '../constants';

const bulbIcon = (
  <AdsClickRoundedIcon
    style={{ color: PURPLE, fontWeight: 900, fontSize: '5rem' }}
  />
);

export function PurpleEntity() {
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
            backgroundColor: PURPLE,
            width: '16rem',
            height: '8rem',
            position: 'absolute',
            borderRadius: '8rem 8rem 0 0',
            top: '15%',
          }}
        ></Box>
        <BottomFacingElement
          color={PURPLE}
          icon={bulbIcon}
          infoCardNumber={'03'}
          styles={{}}
        />
      </Box>
    </>
  );
}
