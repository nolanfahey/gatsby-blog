const animationStatus = {
  COMPLETED: 0,
  ANIMATING: 1,
  AWAIT: 2,
  STOPPED: 3,
  properties: {
    0: { name: 'completed', value: 0 },
    1: { name: 'animating', value: 1 },
    2: { name: 'await', value: 2 },
    3: { name: 'stopped', value: 3 },
  },
};

export default animationStatus;
