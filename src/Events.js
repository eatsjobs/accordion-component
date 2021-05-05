export const Events = {
  CLICKED: 'item-clicked',
  BLURRED: 'item-blurred',
  FOCUSED: 'item-focused',
  OPENED: 'item-opened',
  CLOSED: 'item-closed',
};

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
export const ItemClicked = createEvent(Events.CLICKED);
/**
 * Fired when `accordion-item` has finish to open itself
 *
 * @event item-opened
 * @param {number} id the id of the accordion-item
 */
export const ItemOpened = createEvent(Events.OPENED);

/**
 * Fired when `accordion-item` has finish to open itself
 *
 * @event item-closed
 * @param {number} id the id of the accordion-item
 */
export const ItemClosed = createEvent(Events.CLOSED);
/**
 * Fired when `accordion-item` has been focused
 *
 * @event item-focused
 * @param {number} id the id of the accordion-item
 */
export const ItemFocused = createEvent(Events.FOCUSED);

/**
 * Fired when `accordion-item` has been focused
 *
 * @event item-blurred
 * @param {number} id the id of the accordion-item
 */
export const ItemBlurred = createEvent(Events.BLURRED);
