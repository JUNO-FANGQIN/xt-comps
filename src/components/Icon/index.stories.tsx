import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from './index';

export default {
  title: 'Example/Components/Icon',
  component: Icon
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'id'
};
