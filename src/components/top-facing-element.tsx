import { Box } from '@mui/material';
import { InfoCard, DividerLine, IconContainer } from './sub-components';

interface TopFacingElementProps {
  color: string;
  icon: React.ReactNode;
  infoCardNumber: string;
}

export function TopFacingElement(props: TopFacingElementProps) {
  const { color, icon, infoCardNumber } = props;

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
        <InfoCard color={color} infoCardNumber={infoCardNumber} />
        <DividerLine color={color} />
        <IconContainer color={color} icon={icon} />
      </Box>
    </>
  );
}
