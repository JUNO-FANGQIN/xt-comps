import * as React from 'react';
import { Alert as AntdAlert } from 'antd';

import './style.less';

export enum IAlertType {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'error'
}

export interface TAlert {
  /** alert 主要内容 */
  message: string,
  /** alert 详细描述 */
  description?: string,
  /** alert 类型，枚举IAlertType */
  type: IAlertType,
  /** 
   * 是否展示icon
   * @default true
   */
  showIcon?: boolean,
  /** 是否展示删除icon */
  closable?: boolean,
  /** 删除出发的事件 */
  onClose?: any,
  /** 额外添加动作 */
  action?: any,
  /** 直接传入样式对象 */
  style?: any,
  /** 传入样式类 */
  styleClassname?: any
}

const Alert = (props: TAlert) => {
	const { styleClassname, style, showIcon = true, ...args } = props;
	return (
		<div className={`xt-alert ${styleClassname}`} style={style}>
			<AntdAlert {...args} />
		</div>
	);
};

export default Alert;
