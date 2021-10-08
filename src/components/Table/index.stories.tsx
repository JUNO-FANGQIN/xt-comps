import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Table from './index';

export default {
  title: 'Example/Components/Tabs',
  component: Table
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => {
  console.log('args', args, Table)
  return <Table {...args} />
};

export const Default = Template.bind({});
Default.args = {
  columns: [
    { id: '1', label: 'Tab 1', value: '1', content: 'hello world1'},
    { id: '2', label: 'Tab 2', value: '2', content: 'hello world2'},
    { id: '3', label: 'Tab 3', value: '3', content: 'hello world3'}
  ]
};
