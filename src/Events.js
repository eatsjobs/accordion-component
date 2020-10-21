/**
 *
 * @param {String} name
 * @returns {Function} to have been called with details and options
 */
export function createEvent(name) {
  /**
   * @param {Object} options - detail, bubbles, composed
   * @returns {CustomEvent}
   */
  return options => new CustomEvent(name, options);
}

/**
 * Fired when `accordion-item` has been clicked
 *
 * @event item-clicked
 * @param {number} id the id of the accordion-item
 */
export const ItemClicked = createEvent('item-clicked');
/**
 * Fired when `accordion-item` has finish to open itself
 *
 * @event item-opened
 * @param {number} id the id of the accordion-item
 */
export const ItemOpened = createEvent('item-opened');

/**
 * Fired when `accordion-item` has finish to open itself
 *
 * @event item-closed
 * @param {number} id the id of the accordion-item
 */
export const ItemClosed = createEvent('item-closed');
/**
 * Fired when `accordion-item` has been focused
 *
 * @event item-focused
 * @param {number} id the id of the accordion-item
 */
export const ItemFocused = createEvent('item-focused');

/**
 * Fired when `accordion-item` has been focused
 *
 * @event item-blurred
 * @param {number} id the id of the accordion-item
 */
export const ItemBlurred = createEvent('item-blurred');
