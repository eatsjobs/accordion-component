import { html, TemplateResult } from 'lit';
import '../accordion.js';

export default {
  title: 'AccordionGroup',
  component: 'accordion-group',
  argTypes: {
    title: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
}

const Template: Story<ArgTypes> = ({ title = 'Hello world' }: ArgTypes) => html`
  <accordion-group>
    <accordion-item id="0">
      <div slot="title">${title} 1</div>
      <div slot="content">
        Lorem ipsum sit doler amet 1 Lorem ipsum sit doler amet 1 Lorem ipsum
        sit doler amet 1 Lorem ipsum sit doler amet 1 Lorem ipsum sit doler amet
        1 Lorem ipsum sit doler amet 1
      </div>
    </accordion-item>
    <accordion-item id="1">
      <div slot="title">${title} 2</div>
      <div slot="content">
        Lorem ipsum sit doler amet 2 Lorem ipsum sit doler amet 2 Lorem ipsum
        sit doler amet 2 Lorem ipsum sit doler amet 2 Lorem ipsum sit doler amet
        2 Lorem ipsum sit doler amet 2 Lorem ipsum sit doler amet 2
      </div>
    </accordion-item>
    <accordion-item id="2">
      <div slot="title">${title} 3</div>
      <div slot="content">
        Lorem ipsum sit doler amet 3 Lorem ipsum sit doler amet 3 Lorem ipsum
        sit doler amet 3 Lorem ipsum sit doler amet 3 Lorem ipsum sit doler amet
        3 Lorem ipsum sit doler amet 3
      </div>
    </accordion-item>
  </accordion-group>
`;

export const Regular = Template.bind({});

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'My title',
};
