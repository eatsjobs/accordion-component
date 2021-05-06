type AnimationConfig = {
  steps: Keyframe[];
  timing: KeyframeAnimationOptions;
};

const timing: KeyframeAnimationOptions = {
  duration: 200,
  fill: 'both',
  easing: 'ease-in-out',
};

export function openAnimation(height: number): AnimationConfig {
  return {
    steps: [{ maxHeight: '0px' }, { maxHeight: `${height}px` }],
    timing,
  };
}

export function closeAnimation(height: number): AnimationConfig {
  return {
    steps: [{ maxHeight: `${height}px` }, { maxHeight: '0px' }],
    timing,
  };
}
