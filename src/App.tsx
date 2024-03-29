import { Box } from '@mui/material';
import { DarkBlueEntity, LightBlueEntity, PinkEntity } from './entities';
import { PurpleEntity, RedEntity } from './entities';

function App() {
  return (
    <>
      <Box
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          margin: 0,
          alignItems: 'center',
        }}
      >
        <RedEntity styles={{ translate: '49% 0' }} />
        <PinkEntity styles={{ translate: '24.5%  -12.5%' }} />
        <PurpleEntity />
        <DarkBlueEntity styles={{ translate: '-24.5% -12.5%' }} />
        <LightBlueEntity styles={{ translate: '-49% 0' }} />
      </Box>
    </>
  );
}

export default App;
