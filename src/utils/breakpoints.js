const breakpoints = {
    mobile: 320,
    tablet: 768,
    desktop: 992
  };

export const isMobile = () => window.innerWidth >= breakpoints.mobile && window.innerWidth < breakpoints.tablet;
export const isTablet = () => window.innerWidth >= breakpoints.tablet && window.innerWidth < breakpoints.desktop;
export const isDesktop = () => window.innerWidth >= breakpoints.desktop;