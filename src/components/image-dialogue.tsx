import { Box, DialogContent, IconButton, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import original_img from '../assets/images/react-final-expectation.jpeg';

interface ImageDialogueProps {
  showModal: boolean;
  onClose: () => void;
}

export function ImageDialogue({ showModal, onClose }: ImageDialogueProps) {
  return (
    <>
      <Dialog maxWidth="md" open={showModal} onClose={onClose}>
        <DialogTitle
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography style={{ fontWeight: 600, fontSize: '1.4rem' }}>
            Original image
          </Typography>
          <IconButton
            style={{ fontWeight: 600, fontSize: '1.4rem' }}
            onClick={onClose}
            aria-label="close"
          >
            <CloseRoundedIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <img
            src={original_img}
            alt="original img"
            style={{ width: '640px', height: '440px' }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
