
import React from 'react'
import Icon, { IconProps } from './index'
import { Meta, Story } from '@storybook/react'

export default {
  component: Icon,
  title: 'Example/Components/Icon',
} as Meta

const IconsTemplate: Story<IconProps> = (args) => <Icon {...args}/>

export const IconTest = IconsTemplate.bind({})
IconTest.args = {
  name: 'icon-test',
}

const IconNames = [
  'icon-test',
  'icon-test1',
]

export const AllIcons = () => {

  return (
    <div style={{
      display: 'flex'
      }}
    >
      {
        IconNames.map((name) => {
        return (
            <div style={{marginRight: '10px'}} key={Math.random()}>
              <div style={{textAlign: 'center'}}><Icon name={name}/></div>
              <div>{name}</div>
            </div>
          )
        })
      }
    </div>
  )
}