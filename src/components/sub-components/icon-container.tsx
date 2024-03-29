import { Button, Paper } from '@mui/material';

interface IconContainerProps {
  color: string;
  icon: React.ReactNode;
}

export function IconContainer({ color, icon }: IconContainerProps) {
  return (
    <>
      <Button
        style={{
          borderRadius: '20rem',
          width: '8.5rem',
          height: '8.5rem',
          padding: 0,
        }}
      >
        <Paper
          elevation={4}
          style={{
            borderRadius: '20rem',
            width: '8.5rem',
            height: '8.5rem',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Paper
            elevation={4}
            style={{
              borderRadius: '20rem',
              width: '7.5rem',
              height: '7.5rem',
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {icon}
          </Paper>
        </Paper>
      </Button>
    </>
  );
}
