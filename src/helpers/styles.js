import styled from "styled-components";

export const RetryButton = styled.button`
  background: transparent;
  color: white;
  border: 1px solid white;
  outline: none;
  padding: 5px 10px;
  max-width: 190px;
  margin: 0 auto;
  display: block;
  cursor: pointer;

  &:hover {
    background: white;
    color: black;
  }
`;

export const FetchingText = styled.p`
  color: white;
  text-align: center;
`;
