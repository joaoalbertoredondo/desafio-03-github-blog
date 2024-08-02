import styled from "styled-components";
import effects from "../../assets/effects.svg";


export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 296px;

  background: url(${effects}) no-repeat center;

  img {
    height: 98px;
    margin-top: 64px;
  }
`;
