import { Box } from '@mui/material';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';

import module_styles from './entities.module.css';
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
        <Box
          className={module_styles.light_blue_entity_wave}
          style={{
            backgroundColor: LIGHT_BLUE,
            width: '14rem',
            height: '7rem',
            translate: '0 60%',
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
