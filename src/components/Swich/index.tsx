import * as React from 'react'
import { Switch as AntdSwitch } from 'antd'

import './style.less'

export interface TSwitch {
  /** 辅助测试自动化 */
  id: string,
  /**
   * 是否禁止输入框
   * @default false
   * */
  disabled?: boolean,
  /** 直接传入样式对象 */
  style?: any,
  /** 传入样式类 */
  styleClassname?: any,
  /** checked状态的展示文字 */
  checkedChildren?: string,
  /** unchecked状态的展示文字 */
  unCheckedChildren?: string,
  /** 默认值 */
  defaultChecked?: boolean,
}

const Switch = (props: TSwitch) => {
	const { id, styleClassname, style, ...args } = props
	return (
		<div className={`xt-radio ${styleClassname}`} style={style} id={id}>
      <AntdSwitch {...args} />
		</div>
	)
}

export default Switch
