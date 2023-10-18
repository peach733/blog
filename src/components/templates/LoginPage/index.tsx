import React from 'react';
import * as S from './loginPage.style';
import LoginModal from '../../organisms/LoginModal';

const LoginPage = () => {
  return (
    <S.LoginPageLayout>
      <LoginModal />
    </S.LoginPageLayout>
  );
};

export default LoginPage;
