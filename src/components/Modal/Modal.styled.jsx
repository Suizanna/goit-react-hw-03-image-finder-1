import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: rgba(0, 0, 0, 0.8);
  overflow-y: scroll;
  z-index: 1200;
  backdrop-filter: blur(10px);
`;

export const ModalWindow = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: auto;
  margin: auto;
  border-radius: 10px;
  overflow: hidden;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  border: none;
  cursor: pointer;
  color: #fff;
  background-color: transparent;
  transition: transform 250ms ease-out, color 250ms ease-in-out;
  &:hover {
    transform: scale(1.2);
    color: #3f51b5;
  }
`;
export const Image = styled.img`
  object-fit: cover;
  /* width: 80vw;
  height: 80vh; */
`;