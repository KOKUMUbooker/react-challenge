import { Box } from '@mui/material';
import {
  DarkBlueEntity,
  LightBlueEntity,
  PinkEntity,
  PurpleEntity,
  RedEntity,
} from './entities';

function App() {
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
      <RedEntity />
      <PinkEntity />
      <PurpleEntity />
      <DarkBlueEntity />
      <LightBlueEntity />
    </Box>
  );
}

export default App;
