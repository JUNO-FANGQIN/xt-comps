import * as React from 'react'
import { Tabs as AntdTabs } from 'antd'

const { TabPane } = AntdTabs

import './style.less'

export interface TTabItem {
  id: string
  icon: any,
  label: string,
  value: string,
  content: any,
  args?: any
}

export enum EMTabsType {
  Line = 'line',
  Card = 'card',
  EditableCard = 'editable-card'
}

export interface TTabs {
  tabs: TTabItem[],
  /** 直接传入样式对象 */
  style?: any,
  /** 传入样式类 */
  styleClassname?: any,
  /** 内容区域的样式 */
  paneStyle?: any,
  /**
  * 类型 
  * @default EMTabsType.Line
  */
  type?: EMTabsType,
  /**
  * 切换面板的回调	
  */
  onChange?: () => void,
  /**
  * 新增和删除页签的回调，在 type = EMTabsType.EditableCard 时有效
  */
  onEdit?: () => void,
}

const Tabs = (props: TTabs) => {
	const { styleClassname, style = {}, paneStyle, tabs, type = EMTabsType.Line, ...args } = props
	return (
		<div className={`xt-tabs ${styleClassname}`} style={style}>
      <AntdTabs type={type} {...args}>
        {Array.isArray(tabs) && tabs.map((tab) => {
          return (
            <TabPane id={tab.id} tab={<span>{tab.icon}{tab.label}</span>} key={tab.value} {...tab.args}>
              <div className={paneStyle}>{tab.content}</div>
            </TabPane>
          )
        })}
      </AntdTabs>
		</div>
	)
}

export default Tabs
