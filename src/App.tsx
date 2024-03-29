import { Box } from '@mui/material';
import { BottomFacingElement, TopFacingElement } from './components';
import { PINK, RED } from './constants';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import AdsClickRoundedIcon from '@mui/icons-material/AdsClickRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import { RedeemRounded } from '@mui/icons-material';

function App() {
  const settingsIcon = (
    <SettingsRoundedIcon
      style={{ color: PINK, fontWeight: 900, fontSize: '5rem' }}
    />
  );
  const bulbIcon = (
    <LightbulbRoundedIcon
      style={{ color: RED, fontWeight: 900, fontSize: '5rem' }}
    />
  );

  return (
    <Box
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
        alignItems: 'center',
      }}
    >
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
      <TopFacingElement
        color={PINK}
        icon={settingsIcon}
        infoCardNumber={'02'}
      />
    </Box>
  );
}

export default App;
