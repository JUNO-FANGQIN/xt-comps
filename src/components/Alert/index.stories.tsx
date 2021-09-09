import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Alert, { IAlertType } from './index';

export default {
  title: 'Example/Components/Alert',
  component: Alert
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
  type: IAlertType.Success,
  message: 'Success alert'
};

export const Info = Template.bind({});
Info.args = {
  type: IAlertType.Info,
  message: 'Info alert'
};


export const Warning = Template.bind({});
Warning.args = {
  type: IAlertType.Warning,
  message: 'Warning alert'
};


export const Error = Template.bind({});
Error.args = {
  type: IAlertType.Error,
  message: 'Error alert'
};
