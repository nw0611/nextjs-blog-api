import styled from "styled-components";

// const Anchor = styled.a`
//   color: ${(props) => props.theme.colors.primary};
//   text-decoration: none;
// `;

//storybookをCIでbuildするとprimaryでエラーになるため一旦差し替え
const Anchor = styled.a`
  text-decoration: none;
`;

export default Anchor;
