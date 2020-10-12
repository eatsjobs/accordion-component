import { html, fixture, expect } from '@open-wc/testing';

import '../accordion.js';

const delay = time => new Promise(res => setTimeout(() => res(), time));

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
        <accordion-item title="My header title" id="0" open> A </accordion-item>
        <accordion-item title="My header title 1" id="1"> B </accordion-item>
        <accordion-item title="My header title 2" id="2"> C </accordion-item>
      </accordion-group>
    `);
    el.querySelector('accordion-item')
      .shadowRoot.querySelector('button')
      .click();
    // wait animation end
    await delay(200);
    expect(el.querySelector('accordion-item').open).to.equal(false);
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
