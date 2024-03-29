import { Box } from '@mui/material';
import { InfoCard, DividerLine, IconContainer } from './sub-components';

interface TopFacingElementProps {
  color: string;
  icon: React.ReactNode;
}

export function TopFacingElement({ color, icon }: TopFacingElementProps) {
  return (
    <>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <InfoCard color={color} />
        <DividerLine color={color} />
        <IconContainer color={color} icon={icon} />
      </Box>
    </>
  );
}
