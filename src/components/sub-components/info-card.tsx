import { Paper, Grid, Typography, Box } from '@mui/material';
import entity_module_styles from '../../entities/entities.module.css';
import { DARK_BLUE, LIGHT_BLUE, PINK, PURPLE, RED } from '../../constants';

interface InfoCardProps {
  color: string;
  infoCardNumber: string;
}

export function InfoCard({ color, infoCardNumber }: InfoCardProps) {
  let entity_module_className;
  if (color === RED)
    entity_module_className = entity_module_styles.red_entity_wave;
  else if (color === PINK)
    entity_module_className = entity_module_styles.pink_entity_wave;
  else if (color === PURPLE)
    entity_module_className = entity_module_styles.purple_entity_wave;
  else if (color === DARK_BLUE)
    entity_module_className = entity_module_styles.dark_blue_entity_wave;
  else if (color === LIGHT_BLUE)
    entity_module_className = entity_module_styles.light_blue_entity_wave;

  return (
    <>
      <Paper
        elevation={4}
        className={entity_module_className}
        style={{
          maxWidth: '14.95rem',
          borderTopLeftRadius: '6.5rem',
          borderBottomLeftRadius: '6.5rem',
          backgroundColor: color,
          paddingRight: 0,
          boxShadow: '20px 20px 40px -1px rgba(0, 0, 0, 0.7)',
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
                boxShadow: '5px 5px 25px -1px rgba(0, 0, 0, 0.7)',
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
