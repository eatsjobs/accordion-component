```js script
import { html } from '@open-wc/demoing-storybook';
import '../accordion.js';

export default {
  title: 'AccordionComponent',
  component: 'accordion-component',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# AccordionComponent

A component for for accordion stuff

## Installation

```bash
npm i accordion-component
```

## How to use

```js
<style>
 accordion-group {
  --border-color: hsl(0, 0%, 82%);
  --border-width: 2px;
  --border-style: solid;
  --border-radius: 7px;
  --container-width: 20em;
  --border-color-focus: hsl(216, 94%, 73%);
  --item-background-hover: hsl(216, 94%, 94%);
  --item-text-color: hsl(0, 0%, 13%));
}
</style>
<script type="module">
import 'accordion-component/accordion.js';
</script>
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
```

```js preview-story
export const FirstOpenedFirstRender = () => html`
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
`;
```

```js preview-story
export const Playground = () => html`
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
`;
```
