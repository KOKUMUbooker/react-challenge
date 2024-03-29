import { Box } from '@mui/material';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';

import { BottomFacingElement } from '../components';
import { RED } from '../constants';

const bulbIcon = (
  <LightbulbRoundedIcon
    style={{ color: RED, fontWeight: 900, fontSize: '5rem' }}
  />
);

interface RedEntityProps {
  styles?: React.CSSProperties;
}

export function RedEntity({ styles }: RedEntityProps) {
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
        <Box
          style={{
            backgroundColor: RED,
            width: '16rem',
            height: '8rem',
            position: 'absolute',
            borderRadius: '8rem 8rem 0 0',
            top: '15%',
          }}
        ></Box>
        <BottomFacingElement
          color={RED}
          icon={bulbIcon}
          infoCardNumber={'01'}
          styles={{}}
        />
      </Box>
    </>
  );
}
