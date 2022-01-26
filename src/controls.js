import styled from 'styled-components';
import { PlayFill, StopFill, PauseFill } from 'styled-icons/bootstrap';
import { ControllerFastBackward, ControllerFastForward } from '@styled-icons/entypo';
import { ExchangeAlt } from '@styled-icons/fa-solid';
import { RestartAlt } from '@styled-icons/material-rounded';

const ControlsWrapper = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
  justify-content: center;
  justify-items: center;
  margin: 2rem 0 0.5rem 0;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const Control = styled.button`
  --size: 2.5rem;
  align-items: center;
  border-radius: var(--borderRadius);
  background-color: var(--white);
  cursor: pointer;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  display: flex;
  color: var(--primaryColor);
  height: var(--size);
  justify-content: center;
  transition: opacity 400ms, transform 400ms;
  width: var(--size);
  will-change: opacity;

  :hover {
    opacity: 0.72;
  }

  :active {
    transform: scale(0.8);
  }

  @media screen and (min-width: 768px) {
    &:not(:last-of-type) {
      margin: 0 0.5rem 0 0;
    }
  }
`;

export function Controls({
  onPlay,
  onPause,
  onSpeedUp,
  onSpeedDown,
  onStop,
  onReset,
  onReverseDirection,
}) {
  return (
    <ControlsWrapper>
      <Control onClick={onReset}>
        <RestartAlt />
      </Control>
      <Control onClick={onStop}>
        <StopFill />
      </Control>
      <Control onClick={onPlay}>
        <PlayFill />
      </Control>
      <Control onClick={onPause}>
        <PauseFill />
      </Control>
      <Control onClick={onSpeedDown}>
        <ControllerFastBackward />
      </Control>
      <Control onClick={onSpeedUp}>
        <ControllerFastForward />
      </Control>
      <Control onClick={onReverseDirection}>
        <ExchangeAlt />
      </Control>
    </ControlsWrapper>
  );
}
