import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button, { EMButtonType, EMButtonSize } from './index';

export default {
  title: 'Example/Components/Button',
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Input = Template.bind({});
Input.args = {
  type: EMButtonType.Primary,
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: EMButtonType.Secondary,
};

export const Large = Template.bind({});
Large.args = {
  size: EMButtonSize.Large,
};

export const Small = Template.bind({});
Small.args = {
  size: EMButtonSize.Small,
};
