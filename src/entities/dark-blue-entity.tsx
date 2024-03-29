import { Box } from '@mui/material';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';

import module_styles from './entities.module.css';
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
        <Box
          className={module_styles.dark_blue_entity_wave}
          style={{
            backgroundColor: DARK_BLUE,
            width: '14rem',
            height: '7rem',
            translate: '0 -60%',
            borderRadius: '0 0 8rem 8rem',
            bottom: '15%',
          }}
        ></Box>
      </Box>
    </>
  );
}
