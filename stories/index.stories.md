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

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
npm i accordion-component
```

```js
import 'accordion-component/accordion.js';
```

```js preview-story
export const FirstOpenedFirstRender = () => html`
          <accordion-group>
            <accordion-item title="My header title" id="0" open>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mi congue, faucibus dolor ut, bibendum orci. Etiam sit amet lacus et felis sodales commodo. Phasellus dignissim aliquet lectus. 
            </accordion-item>
            <accordion-item title="My header title 1" id="1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mi congue, faucibus dolor ut, bibendum orci. Etiam sit amet lacus et felis sodales commodo. Phasellus dignissim aliquet lectus. 
            </accordion-item>
            <accordion-item title="My header title 2" id="2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mi congue, faucibus dolor ut, bibendum orci. Etiam sit amet lacus et felis sodales commodo. Phasellus dignissim aliquet lectus. 
            </accordion-item>
        </accordion-group>
`;
```

```js preview-story
export const Playground = () => html`
          <accordion-group>
            <accordion-item title="My header title" id="0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mi congue, faucibus dolor ut, bibendum orci. Etiam sit amet lacus et felis sodales commodo. Phasellus dignissim aliquet lectus. 
            </accordion-item>
            <accordion-item title="My header title 1" id="1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mi congue, faucibus dolor ut, bibendum orci. Etiam sit amet lacus et felis sodales commodo. Phasellus dignissim aliquet lectus. 
            </accordion-item>
            <accordion-item title="My header title 2" id="2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mi congue, faucibus dolor ut, bibendum orci. Etiam sit amet lacus et felis sodales commodo. Phasellus dignissim aliquet lectus. 
            </accordion-item>
        </accordion-group>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <accordion-group>
    <accordion-item title="CustomTitle" id="0">
      Content
    </accordion-item>
  </accordion-group>
`;
```
