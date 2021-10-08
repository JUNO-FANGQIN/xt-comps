import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Explain from './index';

export default {
  title: 'Example/Blocks/Explain',
  component: Explain
} as ComponentMeta<typeof Explain>

const Template: ComponentStory<typeof Explain> = (args) => <Explain {...args} />;

export const Default = Template.bind({});
Default.args = {
  list: [
    { key: '1', content: '您必须在手机上安装一个手机应用：XTransfer，才可以进行操作；' },
    { key: '2', content: '完成X盾绑定后，需要验证XTransfer手机应用生成的验证码；' },
    { key: '3', content: '绑定X盾后，如需删除APP，请在操作前确保已解绑您的X盾；' }
  ]
};
