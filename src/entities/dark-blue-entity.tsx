import { Box } from '@mui/material';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';

import { TopFacingElement } from '../components';
import { DARK_BLUE } from '../constants';

const settingsIcon = (
  <MonetizationOnRoundedIcon
    style={{ color: DARK_BLUE, fontWeight: 900, fontSize: '5rem' }}
  />
);

interface DarkBlueEntityProps {
  styles?: React.CSSProperties;
}

export function DarkBlueEntity({ styles }: DarkBlueEntityProps) {
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
          color={DARK_BLUE}
          icon={settingsIcon}
          infoCardNumber={'04'}
          styles={{ zIndex: 2 }}
        />
      </Box>
    </>
  );
}