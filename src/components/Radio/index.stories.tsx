import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Radio from './index';

export default {
  title: 'Example/Components/Radio',
  component: Radio
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { id: '1', label: 'A', value: 'a' },
    { id: '2', label: 'B', value: 'b' },
    { id: '3', label: 'C', value: 'c' }
  ]
};
