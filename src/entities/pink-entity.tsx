import { Box } from '@mui/material';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

import { TopFacingElement } from '../components';
import { PINK } from '../constants';

const settingsIcon = (
  <SettingsRoundedIcon
    style={{ color: PINK, fontWeight: 900, fontSize: '5rem' }}
  />
);

interface PinkEntityProps {
  styles?: React.CSSProperties;
}

export function PinkEntity({ styles }: PinkEntityProps) {
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
        <TopFacingElement
          color={PINK}
          icon={settingsIcon}
          infoCardNumber={'02'}
          styles={{ zIndex: 2 }}
        />
      </Box>
    </>
  );
}
