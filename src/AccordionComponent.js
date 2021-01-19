import { html, css, LitElement } from 'lit-element';

export class AccordionComponent extends LitElement {
  static get styles() {
    return css`
      .Accordion {
        margin: 0;
        padding: 0;
        border-color: var(--border-color, hsl(0, 0%, 82%));
        border-width: var(--border-width, 2px);
        border-style: var(--border-style, solid);
        border-radius: var(--border-radius, 7px);
        width: var(--width, 20em);
      }

      .Accordion.focus {
        border-color: var(--accordion-border-color-focus, hsl(216, 94%, 73%));
      }
      /*.Accordion ::slotted(.Accordion-trigger) {
        border-bottom: 1px solid hsl(0, 0%, 82%);
      }*/
    `;
  }

  constructor() {
    super();
    this.addEventListener('item-focused', this.onItemEvents);
    this.addEventListener('item-blurred', this.onItemEvents);
  }

  onItemEvents(event) {
    switch (event.type) {
      case 'item-focused':
        return this.container.classList.add('focus');
      case 'item-blurred':
        return this.container.classList.remove('focus');
      default:
        return null;
    }
  }

  get container() {
    return this.shadowRoot.querySelector('.Accordion');
  }

  render() {
    return html`<div class="Accordion">
      <slot></slot>
    </div>`;
  }
}
