import { Box } from '@mui/material';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

import { TopFacingElement } from '../components';
import { PINK } from '../constants';

const settingsIcon = (
  <SettingsRoundedIcon
    style={{ color: PINK, fontWeight: 900, fontSize: '5rem' }}
  />
);

export function PinkEntity() {
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
        <TopFacingElement
          color={PINK}
          icon={settingsIcon}
          infoCardNumber={'02'}
          styles={{ zIndex: 2 }}
        />
        <Box
          style={{
            backgroundColor: PINK,
            width: '16rem',
            height: '8rem',
            position: 'absolute',
            borderRadius: '0 0 8rem 8rem',
            bottom: '15%',
          }}
        ></Box>
      </Box>
    </>
  );
}
