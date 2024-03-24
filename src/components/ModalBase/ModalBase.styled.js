import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 18, 19, 0.4);
  overflow: auto;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 982px;
  max-height: 90%;
  padding: 40px;
  background-color: #fff;
  border-radius: 20px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    margin-top: 14px;
    margin-bottom: 14px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background: #d9d9d9;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  z-index: 1;
  width: 32px;
  height: 32px;
  padding: 0;
  background-color: transparent;
  border: none;
`;

export const CloseIcon = styled.svg`
  width: 32px;
  height: 32px;
  stroke: #101828;
`;
