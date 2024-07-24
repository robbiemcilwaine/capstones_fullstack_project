import React from 'react';
import { useMediaQuery } from 'react-responsive';

const ResponsiveLayout = ({ children }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });

  // Define styles based on screen size
  const layoutStyle = {
    padding: isMobile ? '10px' : isTablet ? '20px' : '30px',
    maxWidth: isMobile ? '100%' : isTablet ? '90%' : '80%',
    margin: '0 auto',
  };

  return (
    <div style={layoutStyle}>
      {children}
    </div>
  );
};

export default ResponsiveLayout;
