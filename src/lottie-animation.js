import styled from 'styled-components';
import Lottie from 'react-lottie';

const AnimationWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  pointer-events: none;
`;

const Author = styled.a`
  color: var(--white);
  cursor: pointer;
  opacity: 0.72;
  font-size: 0.625rem;
  text-align: center;
`;

export function LottieAnimation({ direction, isPaused, isStopped, options, speed }) {
  return (
    <AnimationWrapper>
      <Lottie
        direction={direction}
        height={320}
        isPaused={isPaused}
        isStopped={isStopped}
        options={options}
        speed={speed}
        width={320}
      />
      <Author href='https://lottiefiles.com/hh1jpeux49' target='_blank' rel='noreferrer; noopener'>
        Animation by Alan Cao from Lottie Files
      </Author>
    </AnimationWrapper>
  );
}
