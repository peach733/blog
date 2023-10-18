import React from 'react';
import * as S from './headPage.style';

const HeadPage = () => {
  return (
    <S.HeadPageLayout>
      <S.HeadTitle> Blog </S.HeadTitle>
      <S.HeadSideMenu>
        <S.SideTitle> Content </S.SideTitle>
        <S.SideTitle> Login </S.SideTitle>
        <S.SideTitle> LogOut </S.SideTitle>
      </S.HeadSideMenu>
    </S.HeadPageLayout>
  );
};

export default HeadPage;
