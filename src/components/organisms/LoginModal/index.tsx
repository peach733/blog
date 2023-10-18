import React from 'react';
import * as S from './loginModal.style';

const LoginModal = () => {
  return (
    <S.LoginModalLayout>
      <S.ModalContent>
        <S.ModalForm>
          <S.LoginTitle> Login </S.LoginTitle>
          <>
            <S.LoginInputText> ID </S.LoginInputText>
            <input type="text" />
          </>
          <>
            <S.LoginInputText> PW </S.LoginInputText>
            <input type="text" />
          </>
          <S.LoginBtn type="submit"> 로그인 </S.LoginBtn>
        </S.ModalForm>
      </S.ModalContent>
    </S.LoginModalLayout>
  );
};

export default LoginModal;
