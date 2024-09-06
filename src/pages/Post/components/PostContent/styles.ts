import styled from "styled-components";

export const PostContentContainer = styled.div`
  width: 864px;
  padding: 40px;
  gap: 24px;

  background: transparent;

  display: flex;
  flex-direction: column;

  p {
    text-align: justify;
  }

  section {
    margin-bottom: 24px;
  }

  span {
    color: ${(props) => props.theme["brand-blue"]};
  }
`;
