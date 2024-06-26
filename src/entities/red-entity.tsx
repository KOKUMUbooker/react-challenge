import { Box } from '@mui/material';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';

import module_styles from './entities.module.css';
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
          className={module_styles.red_entity_wave}
          style={{
            backgroundColor: RED,
            width: '14rem',
            height: '7rem',
            borderRadius: '8rem 8rem 0 0',
            translate: '0 60%',
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
