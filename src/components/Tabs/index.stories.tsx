import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tabs, { EMTabsType } from './index';

export default {
  title: 'Example/Components/Tabs',
  component: Tabs
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => {
  console.log('args', args, Tabs)
  return <Tabs {...args} />
};

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { id: '1', label: 'Tab 1', value: '1', content: 'hello world1'},
    { id: '2', label: 'Tab 2', value: '2', content: 'hello world2'},
    { id: '3', label: 'Tab 3', value: '3', content: 'hello world3'}
  ]
};

export const Card = Template.bind({});
Card.args = {
  tabs: [
    { id: '1', label: 'Tab 1', value: '1', content: 'hello world1'},
    { id: '2', label: 'Tab 2', value: '2', content: 'hello world2'},
    { id: '3', label: 'Tab 3', value: '3', content: 'hello world3'}
  ],
  type: EMTabsType.Card
};

export const EditableCard = Template.bind({});
EditableCard.args = {
  tabs: [
    { id: '1', label: 'Tab 1', value: '1', content: 'hello world1'},
    { id: '2', label: 'Tab 2', value: '2', content: 'hello world2'},
    { id: '3', label: 'Tab 3', value: '3', content: 'hello world3'}
  ],
  type: EMTabsType.EditableCard
};