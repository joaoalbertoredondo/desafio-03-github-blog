import styled from "styled-components";

export const PostContainer = styled.div`
  margin-top: 48px;
  margin-bottom: 234px;

  display: grid;
  grid-template-columns: auto auto;
  gap: 2rem;
`;

export const Card = styled.div`
  padding: 2rem;
  width: 416px;
  height: 260px;

  border-radius: 10px;
  background: ${(props) => props.theme["base-post"]};

  header {
    display: flex;
    gap: 1rem;
  }

  h1 {
    color: ${(props) => props.theme["base-title"]};
    font-weight: bold;
    line-height: 160%;
    font-size: 1.25rem;
    flex: 1;
  }

  span {
    color: ${(props) => props.theme["base-span"]};
    font-size: 0.875rem;
    line-height: 160%;
  }

  p {
    color: ${(props) => props.theme["base-text"]};
    margin-top: 1.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`;
