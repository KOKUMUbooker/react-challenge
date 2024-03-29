import { Box } from '@mui/material';
import AdsClickRoundedIcon from '@mui/icons-material/AdsClickRounded';

import { BottomFacingElement } from '../components';
import { PURPLE } from '../constants';

const bulbIcon = (
  <AdsClickRoundedIcon
    style={{ color: PURPLE, fontWeight: 900, fontSize: '5rem' }}
  />
);

interface PurpleEntityProps {
  styles?: React.CSSProperties;
}

export function PurpleEntity({ styles }: PurpleEntityProps) {
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
          color={PURPLE}
          icon={bulbIcon}
          infoCardNumber={'03'}
          styles={{}}
        />
      </Box>
    </>
  );
}
