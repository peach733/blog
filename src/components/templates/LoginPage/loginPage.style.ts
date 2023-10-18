import styled from 'styled-components';

export const LoginPageLayout = styled.div`
  height: calc(100vh - 90px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.gradient.loginBg};
`;
