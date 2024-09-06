import styled from "styled-components";

export const SearchInputContainer = styled.form`
  margin-top: 72px;
  width: 864px;

  input {
    width: 100%;
    background: ${(props) => props.theme["base-input"]};
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme["base-border"]};

    color: ${(props) => props.theme["base-text"]};

    padding: 12px 16px;

    &:focus {
      border-color: ${(props) => props.theme["brand-blue"]};
      outline: none;
    }

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;

export const Posts = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  h2 {
    color: ${(props) => props.theme["base-subtitle"]};
    line-height: 160%;
    font-weight: bold;
    font-size: 18px;
  }

  p {
    color: ${(props) => props.theme["base-span"]};
    line-height: 160%;
    font-size: 14px;
  }
`;
