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
        <RedEntity styles={{}} />
        <PinkEntity />
        <PurpleEntity />
        <DarkBlueEntity />
        <LightBlueEntity />
      </Box>
    </>
  );
}

export default App;
