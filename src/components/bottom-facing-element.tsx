import { Box } from '@mui/material';
import { InfoCard, DividerLine, IconContainer } from './sub-components';
import React from 'react';

interface BottomFacingElementProps {
  color: string;
  icon: React.ReactNode;
  infoCardNumber: string;
  styles?: React.CSSProperties;
}

export function BottomFacingElement(props: BottomFacingElementProps) {
  const { color, icon, infoCardNumber, styles } = props;

  return (
    <>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          // translate: '0 15%',
          ...styles,
        }}
      >
        <IconContainer color={color} icon={icon} />
        <DividerLine color={color} />
        <InfoCard color={color} infoCardNumber={infoCardNumber} />
      </Box>
    </>
  );
}
