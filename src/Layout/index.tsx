import React from 'react';
import HeadPage from '../components/templates/HeadPage';
import FooterPage from '../components/templates/FooterPage';

const Layout = (props: { children: React.ReactElement; isLoggedin: boolean }) => {
  return (
    <>
      <HeadPage />
      {props.children}
      <FooterPage isLoggedin={props.isLoggedin} />
    </>
  );
};

export default Layout;
