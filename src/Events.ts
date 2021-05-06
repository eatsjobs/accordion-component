export const Events = {
  CLICKED: 'item-clicked',
  BLURRED: 'item-blurred',
  FOCUSED: 'item-focused',
  OPENED: 'item-opened',
  CLOSED: 'item-closed',
};

type EventFactory = { (options: CustomEventInit): CustomEvent };

/**
 *
 * @param {String} name
 * @returns {Function} to have been called with details and options
 */
export function createEventFactory(name: string): EventFactory {
  /**
   * @param {CustomEventInit} options - detail, bubbles, composed
   * @returns {CustomEvent}
   */
  return (options: CustomEventInit) => new CustomEvent(name, options);
}

/**
 * Fired when `accordion-item` has been clicked
 *
 * @event item-clicked
 * @param {number} id the id of the accordion-item
 */
export const ItemClicked = createEventFactory(Events.CLICKED);
/**
 * Fired when `accordion-item` has finish to open itself
 *
 * @event item-opened
 * @param {number} id the id of the accordion-item
 */
export const ItemOpened = createEventFactory(Events.OPENED);

/**
 * Fired when `accordion-item` has finish to open itself
 *
 * @event item-closed
 * @param {number} id the id of the accordion-item
 */
export const ItemClosed = createEventFactory(Events.CLOSED);
/**
 * Fired when `accordion-item` has been focused
 *
 * @event item-focused
 * @param {number} id the id of the accordion-item
 */
export const ItemFocused = createEventFactory(Events.FOCUSED);

/**
 * Fired when `accordion-item` has been blurred
 *
 * @event item-blurred
 * @param {number} id the id of the accordion-item
 */
export const ItemBlurred = createEventFactory(Events.BLURRED);
