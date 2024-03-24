import styled from "styled-components";

export const LoadMoreBtn = styled.button`
  display: flex;
  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #101828;
  background-color: transparent;
  border: 1px solid rgba(71, 84, 103, 0.2);
  border-radius: 200px;
  transition: 250ms border-color linear;

  &:hover {
    border-color: #e44848;
  }
`;
