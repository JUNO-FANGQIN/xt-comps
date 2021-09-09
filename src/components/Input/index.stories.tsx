import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input, { EMInputType, EMInputSize } from './index';

export default {
  title: 'Example/Components/Input',
  component: Input,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: EMInputType.Input,
  style: { width: 500 }
};

export const Password = Template.bind({});
Password.args = {
  type: EMInputType.Password,
  style: { width: 500 }
};

export const Search = Template.bind({});
Search.args = {
  type: EMInputType.Search,
  style: { width: 500 }
};

export const Large = Template.bind({});
Large.args = {
  size: EMInputSize.Large,
  style: { width: 500 }
};

export const Middle = Template.bind({});
Middle.args = {
  size: EMInputSize.Middle,
  style: { width: 500 }
};


export const Small = Template.bind({});
Small.args = {
  size: EMInputSize.Small,
  style: { width: 500 }
};
