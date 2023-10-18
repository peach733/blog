import styled from 'styled-components';

export const HeadPageLayout = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.colors.defaultColor};
  height: 30px;
  padding: 30px;
`;

export const HeadTitle = styled.p`
  font-weight: 500;
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.defaultWhite};
`;

export const HeadSideMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: right;
  gap: 20px;
`;

export const SideTitle = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.defaultWhite};
`;
