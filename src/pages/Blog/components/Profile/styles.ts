import styled from "styled-components";

export const ProfileContainer = styled.section`
  background: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  max-width: 864px;
  display: flex;
  gap: 32px;
  padding: 32px;

  margin-top: -88px;
`;

export const ProfilePicture = styled.div`
  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;

    h1 {
      color: ${(props) => props.theme["base-title"]};
    }

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      color: ${(props) => props.theme["brand-blue"]};
      font-weight: bold;
      font-size: 12px;
    }
  }

  p {
    margin-top: 8px;
    color: ${(props) => props.theme["base-text"]};
  }

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
      color: ${(props) => props.theme["base-subtitle"]};
    }

    svg {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;
