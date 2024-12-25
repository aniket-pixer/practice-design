import styled, { keyframes } from "styled-components";

const Loop = keyframes`
 0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
`;
const StyleDuration = styled.div`
  --duration: 15936ms;
  --direction: normal;
  .inner {
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: 10px;
    animation-name: ${Loop};
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: var(--direction);
    animation-duration: var(--duration);
  }
`;

const StyleDuration2 = styled.div`
  --duration: 16638ms;
  --direction: reverse;
  .inner {
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: 10px;
    animation-name: ${Loop};
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: var(--direction);
    animation-duration: var(--duration);
  }
`;

const TegList = styled.div`
  width: 14rem;
  height: 88dvh;
  margin: auto;
  /* max-width: 90vw; */
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  gap: 1rem 0;
  position: relative;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  overflow: hidden;
`;

const TegItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0 0.2rem;
  color: #e2e8f0;
  font-size: 0.9rem;
  background-color: #334155;
  border-radius: 0.4rem;
  padding: 0.7rem 1rem;
  margin-right: 1rem;
  box-shadow: 0 0.1rem 0.2rem gray, 0 0.1rem 0.5rem gray, 0 0.2rem 1.5rem gray;

  span {
    font-size: 1.2rem;
    color: #64748b;
  }
`;

export { StyleDuration, StyleDuration2, TegList, TegItem };
