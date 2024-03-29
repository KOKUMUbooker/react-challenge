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
          width: '9rem',
          height: '9rem',
          padding: 0,
        }}
      >
        <Paper
          elevation={4}
          style={{
            borderRadius: '20rem',
            width: '9rem',
            height: '9rem',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Paper
            elevation={4}
            style={{
              borderRadius: '20rem',
              width: '8.2rem',
              height: '8.2rem',
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
