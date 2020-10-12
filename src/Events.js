export function createEvent(name) {
  return detail =>
    new CustomEvent(name, {
      detail,
    });
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
