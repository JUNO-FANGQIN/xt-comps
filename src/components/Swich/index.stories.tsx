import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Swich from './index';

export default {
  title: 'Example/Components/Swich',
  component: Swich
} as ComponentMeta<typeof Swich>;

const Template: ComponentStory<typeof Swich> = (args) => <Swich {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultChecked: true
};

export const WithText = Template.bind({});
WithText.args = {
  checkedChildren: 'open',
  unCheckedChildren: 'close'
};
