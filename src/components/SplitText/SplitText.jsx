import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

const AnimatedLetter = ({ letter, delay, animationFrom, animationTo, inView, isLast, onLetterAnimationComplete }) => {
  const spring = useSpring({
    from: animationFrom,
    to: inView ? animationTo : animationFrom,
    delay: delay,
    config: { tension: 200, friction: 20 },
    onRest: () => {
      if (isLast && onLetterAnimationComplete) {
        onLetterAnimationComplete();
      }
    }
  });

  return (
    <animated.span style={{
      ...spring,
      transform: spring.y.to(y => `translateY(${y}px)`)
    }}>
      {letter === ' ' ? '\u00A0' : letter}
    </animated.span>
  );
};

const SplitText = ({
  text,
  className = '',
  delay = 150,
  animationFrom,
  animationTo,
  threshold = 0.2,
  rootMargin = '-50px',
  onLetterAnimationComplete
}) => {
  const [ref, inView] = useInView({
    threshold,
    rootMargin,
    triggerOnce: true
  });

  const letters = text.split('');

  return (
    <span ref={ref} className={className}>
      {letters.map((letter, i) => (
        <AnimatedLetter
          key={i}
          letter={letter}
          delay={i * delay}
          animationFrom={animationFrom}
          animationTo={animationTo}
          inView={inView}
          isLast={i === letters.length - 1}
          onLetterAnimationComplete={onLetterAnimationComplete}
        />
      ))}
    </span>
  );
};

export default SplitText; 