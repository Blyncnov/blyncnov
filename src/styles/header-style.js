import styled from "styled-components";

import Bg from "../assests/bg-bg.svg";

export const HeaderSectionContainer = styled.div`
  width: 100%;
  background-color: #0f1140;
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: saturation;
`;

export const HeaderSectionEffect = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(50px);
`;

export default HeaderSectionContainer;
