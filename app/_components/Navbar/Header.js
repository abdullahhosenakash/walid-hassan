'use client';

import Headroom from 'react-headroom';

const Header = ({ children }) => {
  return (
    <header>
      <Headroom>{children}</Headroom>
    </header>
  );
};
export default Header;
