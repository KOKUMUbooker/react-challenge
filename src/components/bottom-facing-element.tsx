import { Box } from '@mui/material';
import { InfoCard, DividerLine, IconContainer } from './sub-components';

interface BottomFacingElementProps {
  color: string;
  icon: React.ReactNode;
}

export function BottomFacingElement({ color, icon }: BottomFacingElementProps) {
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
        <IconContainer color={color} icon={icon} />
        <DividerLine color={color} />
        <InfoCard color={color} />
      </Box>
    </>
  );
}
