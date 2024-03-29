import { Box } from '@mui/material';

interface DividerLineProps {
  color: string;
}

export function DividerLine({ color }: DividerLineProps) {
  return (
    <>
      <Box
        style={{
          height: '5rem',
          width: '0.25rem',
          backgroundColor: color,
        }}
      ></Box>
    </>
  );
}
