import { html, css, LitElement } from 'lit-element';

export class AccordionComponent extends LitElement {
  static get styles() {
    return css`
      .Accordion {
        margin: 0;
        padding: 0;
        border: 2px solid hsl(0, 0%, 82%);
        border-radius: 7px;
        width: 20em;
      }

      .Accordion h3 {
        margin: 0;
        padding: 0;
      }

      .Accordion.focus {
        border-color: hsl(216, 94%, 73%);
      }

      .Accordion.focus h3 {
        background-color: hsl(0, 0%, 97%);
      }

      .Accordion > * + * {
        border-top: 1px solid hsl(0, 0%, 82%);
      }
    `;
  }

  render() {
    return html`<div class="Accordion">
      <slot></slot>
    </div>`;
  }
}
