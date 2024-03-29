import { Box } from '@mui/material';
import { InfoCard, DividerLine, IconContainer } from './sub-components';

interface TopFacingElementProps {
  color: string;
  icon: React.ReactNode;
  infoCardNumber: string;
  styles?: React.CSSProperties;
}

export function TopFacingElement(props: TopFacingElementProps) {
  const { color, icon, infoCardNumber, styles } = props;

  return (
    <>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          translate: '0 -40%',
          ...styles,
        }}
      >
        <InfoCard color={color} infoCardNumber={infoCardNumber} />
        <DividerLine color={color} />
        <IconContainer color={color} icon={icon} />
      </Box>
    </>
  );
}
