import { withDesign } from "storybook-addon-designs"
import { createButtonGroup } from "./ButtonGroup"

export default {
  title: 'Molecules/ButtonGroup',
  component: createButtonGroup,
  decorators: [withDesign],
  argTypes: {
    quantity: { control: 'number' },
    style: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'ghost']
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    leadingIcon: { control: 'boolean' },
    trailingIcon: { control: 'boolean' },
  }
}

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButtonGroup({ label, ...args });
}

export const btnGroup = Template.bind({})

btnGroup.args = {
  quantity: 3,
  style: 'filled',
  size: 'medium',
  leadingIcon: false,
  trailingIcon: false,
}

btnGroup.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Arb6cRkgwwNgB2tfPQHVRb/Components?node-id=210%3A206',
  },
}