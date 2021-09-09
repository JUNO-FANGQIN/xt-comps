import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Select, { TSelectMode } from './index';

export default {
  title: 'Example/Components/Select',
  component: Select
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'default-select',
  options: [
    { id: '1', label: 'A', value: 'a' },
    { id: '2', label: 'B', value: 'b' },
    { id: '3', label: 'C', value: 'c', disabled: true }
  ],
  style: { width: 500 }
};

export const Multiple = Template.bind({});
Multiple.args = {
  id: 'multiple-select',
  options: [
    { id: '1', label: 'A', value: 'a' },
    { id: '2', label: 'B', value: 'b' },
    { id: '3', label: 'C', value: 'c', disabled: true },
    { id: '4', label: 'D', value: 'd' }
  ],
  mode: TSelectMode.Multiple,
  maxTagCount: 2,
  style: { width: 500 }
};

export const Tags = Template.bind({});
Tags.args = {
  id: 'multiple-select',
  options: [
    { id: '1', label: 'A', value: 'a' },
    { id: '2', label: 'B', value: 'b' },
    { id: '3', label: 'C', value: 'c', disabled: true }
  ],
  mode: TSelectMode.Tags,
  style: { width: 500 }
};
