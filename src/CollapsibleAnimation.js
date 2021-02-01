/**
 * @typedef {Object} Animation
 * @property {Array} steps
 * @property {Timing} timing
 */

/**
 * @typedef {Object} Timing
 * @property {Number} duration
 * @property {String} easing
 * @property {String} fill
 */

const timing = { duration: 150, fill: 'both', easing: 'ease' };

/**
 * Returns open animation object
 * @param {Number} height - the max-height to animate to
 * @returns {Animation}
 */
export function openAnimation(height) {
  return {
    steps: [{ maxHeight: '0px' }, { maxHeight: `${height}px` }],
    timing,
  };
}

/**
 * Returns the close animation object
 * @param {Number} height - the max-height to animate from
 * @returns {Animation}
 */
export function closeAnimation(height) {
  return {
    steps: [{ maxHeight: `${height}px` }, { maxHeight: '0px' }],
    timing,
  };
}
