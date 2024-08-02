import styled from "styled-components";

export const PostHeaderContainer = styled.header`
  background: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  width: 864px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;

  margin-top: -88px;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    text-transform: uppercase;

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      font-weight: bold;

      line-height: 0;

      color: ${(props) => props.theme["brand-blue"]};

      &:hover {
        text-decoration: underline;
      }
    }
  }

  div {
    ul {
      list-style-type: none;
      display: flex;
      gap: 24px;
      align-items: center;
      margin-top: 24px;

      li {
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${(props) => props.theme["base-span"]};
      }

      svg {
        color: ${(props) => props.theme["base-label"]};
      }
    }
  }
`;
