import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon, { EMIconType } from './index';

export default {
  title: 'Example/Components/Icon',
  component: Icon
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = () => {
  const types = Object.values(EMIconType)
  return (
    <div style={{ display: 'flex', flexDirection: 'row'}}>
      {types.map((type: EMIconType)  => {
        return (
          <div style={{ margin: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Icon id="key" type={type} />
            <div>icon-{type}</div>
          </div>
        )
      })}
    </div>
  )
}
