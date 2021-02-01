import { html, fixture, expect, oneEvent } from '@open-wc/testing';
import '../accordion.js';

describe('AccordionComponent', () => {
  it('has first opened default title', async () => {
    const el = await fixture(html`
      <accordion-group>
        <accordion-item id="0" open>
          <div slot="title">My header title 1</div>
          <div slot="content">Lorem ipsum sit doler amet 1</div>
        </accordion-item>
        <accordion-item id="1">
          <div slot="title">My header title 2</div>
          <div slot="content">Lorem ipsum sit doler amet 2</div>
        </accordion-item>
        <accordion-item id="2">
          <div slot="title">My header title 3</div>
          <div slot="content">Lorem ipsum sit doler amet 3</div>
        </accordion-item>
      </accordion-group>
    `);

    expect(el.querySelectorAll('accordion-item').length).to.equal(3);
  });

  it('close default opened', async () => {
    const el = await fixture(html`
      <accordion-group>
        <accordion-item id="0" open>
          <div slot="title">My header title 1</div>
          <div slot="content">Lorem ipsum sit doler amet 1</div>
        </accordion-item>
        <accordion-item id="1">
          <div slot="title">My header title 2</div>
          <div slot="content">Lorem ipsum sit doler amet 2</div>
        </accordion-item>
        <accordion-item id="2">
          <div slot="title">My header title 3</div>
          <div slot="content">Lorem ipsum sit doler amet 3</div>
        </accordion-item>
      </accordion-group>
    `);
    const [first] = el.querySelectorAll('accordion-item');
    const listener = oneEvent(first, 'item-closed');
    first.shadowRoot.querySelector('button').click();
    const { detail } = await listener;
    expect(detail.id).to.equal('0');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <accordion-group>
        <accordion-item id="0" open>
          <div slot="title">My header title 1</div>
          <div slot="content">Lorem ipsum sit doler amet 1</div>
        </accordion-item>
        <accordion-item id="1">
          <div slot="title">My header title 2</div>
          <div slot="content">Lorem ipsum sit doler amet 2</div>
        </accordion-item>
        <accordion-item id="2">
          <div slot="title">My header title 3</div>
          <div slot="content">Lorem ipsum sit doler amet 3</div>
        </accordion-item>
      </accordion-group>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
