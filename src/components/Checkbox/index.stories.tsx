import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from './index';

export default {
  title: 'Example/Components/Checkbox',
  component: Checkbox
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { id: '1', label: 'A', value: 'a' },
    { id: '2', label: 'B', value: 'b' },
    { id: '3', label: 'C', value: 'c' }
  ]
};
