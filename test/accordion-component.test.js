import { html, fixture, expect, oneEvent } from '@open-wc/testing';
import '../accordion.js';

describe('AccordionComponent', () => {
  it('has first opened default title', async () => {
    const el = await fixture(html`
      <accordion-group>
        <accordion-item title="My header title" id="0" open> A </accordion-item>
        <accordion-item title="My header title 1" id="1"> B </accordion-item>
        <accordion-item title="My header title 2" id="2"> C </accordion-item>
      </accordion-group>
    `);

    expect(el.querySelector('accordion-item').title).to.equal(
      'My header title'
    );
  });

  it('close default opened', async () => {
    const el = await fixture(html`
      <accordion-group>
        <accordion-item title="My header title" id="0"> A </accordion-item>
        <accordion-item title="My header title 1" id="1"> B </accordion-item>
        <accordion-item title="My header title 2" id="2"> C </accordion-item>
      </accordion-group>
    `);
    const [first] = el.querySelectorAll('accordion-item');
    first.shadowRoot.querySelector('button').click();
    const { detail } = await oneEvent(first, 'item-opened');
    expect(detail.id).to.equal('0');
    expect(first.open).to.equal(true);
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <accordion-group>
        <accordion-item title="My header title" id="0" open> A </accordion-item>
        <accordion-item title="My header title 1" id="1"> B </accordion-item>
        <accordion-item title="My header title 2" id="2"> C </accordion-item>
      </accordion-group>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
