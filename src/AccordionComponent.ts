import { html, css, LitElement, TemplateResult, CSSResultGroup } from 'lit';

export class AccordionComponent extends LitElement {
  static get styles(): CSSResultGroup {
    return css`
      .Accordion {
        margin: 0;
        padding: 0;
        border-color: var(--border-color, hsl(0, 0%, 82%));
        border-width: var(--border-width, 2px);
        border-style: var(--border-style, solid);
        border-radius: var(--border-radius, 7px);
        width: var(--width, 20em);
        border-bottom-color: transparent;
      }

      .Accordion:focus-within {
        border-color: var(--border-color-focus, hsl(216, 94%, 73%));
      }
    `;
  }

  render(): TemplateResult {
    return html`<div class="Accordion">
      <slot></slot>
    </div>`;
  }
}
