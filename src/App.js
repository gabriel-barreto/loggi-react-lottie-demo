import { useState } from 'react';
import styled from 'styled-components';

import { Controls } from './controls';
import { Footer } from './footer';
import { LottieAnimation } from './lottie-animation';
import { StateDisplay } from './state-display';

import animationData from './lottie-animation.json';

const Wrapper = styled.main`
  align-items: center;
  background-color: var(--primaryColor);
  justify-content: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 2rem;
  width: 100%;
`;

const ANIMATION_STATES = {
  STOPPED: { paused: false, stopped: true },
  RUNNING: { paused: false, stopped: false },
  PAUSED: { paused: true, stopped: false },
};

const INITIAL_STATE = {
  status: ANIMATION_STATES.RUNNING,
  /* Direction = 1: normal, -1: reversed */
  direction: 1,
  speed: 1,
  loop: true,
};

export function App() {
  const [animationState, setAnimationState] = useState(INITIAL_STATE);
  const lottieOptions = {
    animationData,
    loop: animationState.loop,
    autoplay: true,
    rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
  };

  function handlePause() {
    setAnimationState((prev) => ({
      ...prev,
      status: ANIMATION_STATES.PAUSED,
    }));
  }

  function handlePlay() {
    setAnimationState((prev) => ({
      ...prev,
      status: ANIMATION_STATES.RUNNING,
    }));
  }

  function handleReset() {
    setAnimationState(INITIAL_STATE);
  }

  function handleReverseDirection() {
    setAnimationState((prev) => ({ ...prev, direction: prev.direction * -1 }));
  }

  function handleSpeedDown() {
    setAnimationState((prev) => ({
      ...prev,
      speed: Math.max(prev.speed - 0.25, 0.25),
    }));
  }

  function handleSpeedUp() {
    setAnimationState((prev) => ({
      ...prev,
      speed: Math.min(prev.speed + 0.25, 3),
    }));
  }

  function handleStop() {
    setAnimationState((prev) => ({
      ...prev,
      status: ANIMATION_STATES.STOPPED,
    }));
  }

  return (
    <div className='App'>
      <Wrapper>
        <LottieAnimation
          direction={animationState.direction}
          isPaused={animationState.status.paused}
          isStopped={animationState.status.stopped}
          options={lottieOptions}
          speed={animationState.speed}
        />
        <Controls
          onPause={handlePause}
          onPlay={handlePlay}
          onReset={handleReset}
          onReverseDirection={handleReverseDirection}
          onSpeedDown={handleSpeedDown}
          onSpeedUp={handleSpeedUp}
          onStop={handleStop}
        />
        <StateDisplay state={animationState} />
        <Footer />
      </Wrapper>
    </div>
  );
}
