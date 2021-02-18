import React from 'react'
import { withDesign } from 'storybook-addon-designs'

import { Button } from './Button'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withDesign],
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
}

Primary.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
  },
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
}

Secondary.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
  },
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

Large.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
  },
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}

Small.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
  },
}
