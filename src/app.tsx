import { useState } from 'react';
import { Box, Button } from '@mui/material';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { DarkBlueEntity, LightBlueEntity, PinkEntity } from './entities';
import { PurpleEntity, RedEntity } from './entities';
import { ImageDialogue } from './components';

function App() {
  const [showModal, setShowModal] = useState(false);

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
        <Button
          variant="outlined"
          startIcon={<VisibilityRoundedIcon />}
          onClick={() => setShowModal(true)}
          sx={{
            position: 'absolute',
            borderWidth: '0.15rem',
            top: '5%',
            right: '5%',
            borderRadius: '1.5rem',
            paddingY: '.5rem',
            paddingX: '1.5rem',
            fontWeight: 400,
            fontSize: '1.15rem',
          }}
        >
          View original
        </Button>
        <RedEntity styles={{ translate: '49% 0' }} />
        <PinkEntity styles={{ translate: '24.5%  -12.65%' }} />
        <PurpleEntity />
        <DarkBlueEntity styles={{ translate: '-24.5% -12.65%' }} />
        <LightBlueEntity styles={{ translate: '-49% 0' }} />
      </Box>
      <ImageDialogue
        showModal={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}

export default App;
