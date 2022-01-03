import { withDesign } from "storybook-addon-designs"
import { createButton } from "./Button"

export default {
  title: 'Components/Button',
  component: createButton,
  decorators: [withDesign],
  argTypes: {
    // backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    disabled: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    leadingIcon: { control: 'boolean' },
    trailingIcon: { control: 'boolean' },
  },
}

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton({ label, ...args });
}

// Filled
export const Filled = Template.bind({})
Filled.args = {
  label: 'Filled',
  size: 'medium',
  disabled: false,
  leadingIcon: false,
  trailingIcon: false,
}

Filled.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Arb6cRkgwwNgB2tfPQHVRb/Components?node-id=77%3A2055',
  },
}

// Outlined
export const Outlined = Template.bind({})
Outlined.args = {
  label: 'Outlined',
  size: 'medium',
  disabled: false,
  leadingIcon: false,
  trailingIcon: false,
  style: 'outlined',
}

Outlined.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Arb6cRkgwwNgB2tfPQHVRb/Components?node-id=220%3A5257',
  },
}

// Ghost
export const Ghost = Template.bind({})
Ghost.args = {
  label: 'Ghost',
  size: 'medium',
  disabled: false,
  leadingIcon: false,
  trailingIcon: false,
  style: 'ghost',
}

Ghost.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Arb6cRkgwwNgB2tfPQHVRb/Components?node-id=220%3A5522',
  },
}

// TODO: add icon button.