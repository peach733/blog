import React from 'react';
import * as S from './footerPage.style';

const FooterPage = (props: { isLoggedin: boolean }) => {
  return (
    <S.FooterPageLayout className={`${props.isLoggedin}`}>
      <S.FooterFirst className={`${props.isLoggedin}`}>
        <S.FirstTitle> Blog </S.FirstTitle>
      </S.FooterFirst>
    </S.FooterPageLayout>
  );
};

export default FooterPage;
