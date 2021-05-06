import { css, html, LitElement, TemplateResult, CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { openAnimation, closeAnimation } from './CollapsibleAnimation.js';
import {
  ItemClosed,
  ItemOpened,
  ItemClicked,
  ItemFocused,
  ItemBlurred,
} from './Events.js';

export class AccordionItem extends LitElement {
  static get styles(): CSSResultGroup {
    return css`
      .Accordion-title {
        display: block;
        pointer-events: none;
        border: transparent 2px solid;
        border-radius: 5px;
        padding: 0.25em;
        outline: none;
      }
      .Accordion-trigger:focus .Accordion-title {
        border-color: var(--border-color-focus, hsl(216, 94%, 73%));
      }
      .Accordion-icon {
        border: solid var(--border-color, hsl(0, 0%, 62%));
        border-width: 0 2px 2px 0;
        height: 0.5rem;
        pointer-events: none;
        position: absolute;
        right: 2em;
        top: 50%;
        transform: translateY(-60%) rotate(45deg);
        width: 0.5rem;
        transition: transform 150ms ease;
        will-change: transform;
      }

      .Accordion-trigger {
        background: none;
        color: var(--item-text-color, hsl(0, 0%, 13%));
        display: block;
        font-size: 1rem;
        font-weight: normal;
        margin: 0;
        padding: 1em 1.5em;
        position: relative;
        text-align: left;
        width: 100%;
        outline: none;
      }

      .Accordion-trigger[aria-expanded='true'] .Accordion-icon {
        transform: translateY(-50%) rotate(-135deg);
      }

      .Accordion-trigger:focus,
      .Accordion-trigger:hover {
        background: var(--item-background-hover, hsl(216, 94%, 94%));
      }

      .Accordion-panel {
        margin: 0;
        height: auto;
        max-height: 0;
        overflow: hidden;
      }

      .Accordion-panel > ::slotted([slot='content']) {
        padding: 1em 1.5em;
      }

      .AccordionItem {
        border-bottom-color: var(--border-color, hsl(0, 0%, 82%));
        border-bottom-width: var(--border-width, 1px);
        border-bottom-style: var(--border-style, solid);
      }

      button {
        border-style: none;
      }
    `;
  }

  @property({ type: Boolean, reflect: true }) open;

  @property({ type: String, reflect: true }) id;

  private __animating: boolean;

  get container(): HTMLElement | null | undefined {
    return this.shadowRoot?.getElementById(`sect-${this.id}`);
  }

  constructor() {
    super();
    this.id = '';
    this.open = false;
    this.__animating = false;
  }

  async firstUpdated(): Promise<void> {
    // handle first render with open property
    await new Promise(r => setTimeout(r, 0));
    if (this.open) {
      await this.expand();
    }
  }

  /**
   * Utility function that runs the
   * accordion animation and
   * set the open state
   * @param {Boolean} open - true for expand and false for collapse
   * @returns {Promise<{{ id: String }}>} when the animation ends
   */
  async __toggle(open: boolean): Promise<{ id: string }> {
    const scrollHeight = this.container?.scrollHeight ?? 0;
    const animationConfig = open
      ? openAnimation(scrollHeight)
      : closeAnimation(scrollHeight);
    const animation = this.container?.animate(
      animationConfig.steps,
      animationConfig.timing
    );
    return new Promise(resolve => {
      if (animation)
        animation.onfinish = () => {
          resolve({ id: this.id });
          this.open = open;
        };
    });
  }

  /**
   * Collapse the AccordionItem
   * @returns {Promise<{{ id: String }}>}
   */
  async collapse(): Promise<{ id: string }> {
    return this.__toggle(false);
  }

  /**
   * Expand the AccordionItem
   * @returns {Promise<{{ id: String }}>}
   */
  async expand(): Promise<{ id: string }> {
    return this.__toggle(true);
  }

  /**
   * onClick handler
   * dispatch item-clicked, item-opened | item-closed
   */
  async onClick(): Promise<void> {
    if (this.__animating) {
      return;
    }
    this.dispatchEvent(
      ItemClicked({ detail: { id: this.id }, bubbles: true, composed: true })
    );
    this.__animating = true;
    if (this.open) {
      await this.collapse();
    } else {
      await this.expand();
    }
    this.__animating = false;
    this.dispatchEvent(
      this.open
        ? ItemOpened({ detail: { id: this.id }, bubbles: true, composed: true })
        : ItemClosed({ detail: { id: this.id }, bubbles: true, composed: true })
    );
  }

  _onFocus(): void {
    this.dispatchEvent(
      ItemFocused({ detail: { id: this.id }, bubbles: true, composed: true })
    );
  }

  _onBlur(): void {
    this.dispatchEvent(
      ItemBlurred({ detail: { id: this.id }, bubbles: true, composed: true })
    );
  }

  render(): TemplateResult {
    return html`
      <div class="AccordionItem">
        <button
          @focus=${this._onFocus}
          @blur=${this._onBlur}
          @click=${this.onClick}
          class="Accordion-trigger"
          id="accordion-${this.id}"
          aria-controls="sect-${this.id}"
          aria-expanded="${this.open}"
          aria-disabled="${!this.open}"
          ?hidden=${!this.open}
        >
          <span class="Accordion-title">
            <slot name="title"></slot>
            <span class="Accordion-icon"></span>
          </span>
        </button>

        <div
          id="sect-${this.id}"
          role="region"
          aria-labelledby="accordion-${this.id}"
          class="Accordion-panel"
        >
          <slot name="content"></slot>
        </div>
      </div>
    `;
  }
}
