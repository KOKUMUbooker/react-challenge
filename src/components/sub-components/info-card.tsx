import { Paper, Grid, Typography, Box } from '@mui/material';

interface InfoCardProps {
  color: string;
  infoCardNumber: string;
}

export function InfoCard({ color, infoCardNumber }: InfoCardProps) {
  return (
    <>
      <Paper
        elevation={4}
        style={{
          maxWidth: '14.95rem',
          borderTopLeftRadius: '6.5rem',
          borderBottomLeftRadius: '6.5rem',
          backgroundColor: color,
          paddingRight: 0,
        }}
      >
        <Grid container>
          <Grid item xs={4} alignContent={'center'}>
            <Paper
              elevation={4}
              style={{
                borderRadius: '20rem',
                width: '5rem',
                height: '5rem',
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography
                style={{ color: color, fontWeight: 900, fontSize: '3rem' }}
              >
                {infoCardNumber}
              </Typography>
            </Paper>
          </Grid>
          <Grid
            item
            xs={7}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              backgroundColor: color,
              paddingRight: 0,
            }}
          >
            <Box
              paddingY={0.25}
              paddingLeft={2}
              paddingRight={0}
              style={{ width: '100%' }}
              fontStyle={{ color: 'white' }}
            >
              <Typography style={{ fontWeight: 'bolder' }}>
                YOUR TITLE
              </Typography>
              <Typography fontSize={'0.55rem'}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda error molestiae ad quidem
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
