import * as React from 'react';
import { Checkbox as AntdCheckbox } from 'antd';
import Error from 'components/Error';

import './style.less';

export interface TCheckboxOption {
  id: string,
  label: string,
  value: string
}

export interface TCheckbox {
  /**
   * 是否禁止输入框
   * @default false
   * */
  disabled?: boolean,
  /** 直接传入样式对象 */
  style?: any,
  /** 传入样式类 */
  styleClassname?: any,
  /** 不用手动传，当此组件作为Field组建的component属性时会自动传递 */
  meta?: any,
  /** 不用手动传，当此组件作为Field组建的component属性时会自动传递 */
  input?: any,
  /** 手动传值 */
  value?: string,
  /** 手动传值 */
  options: TCheckboxOption[]
}

const Checkbox = (props: TCheckbox) => {
	const { meta = null, input = null, options, styleClassname, style, ...args } = props;
	return (
		<div className={`xt-checkbox ${styleClassname}`} style={style}>
			<AntdCheckbox.Group {...(input || {})} {...args}>
				{options && Array.isArray(options) && options.map((option: TCheckboxOption) => (
					<AntdCheckbox id={option.id} key={option.id} value={option.value}>{option.label}</AntdCheckbox>
				))}
			</AntdCheckbox.Group>
			{meta && meta.touched && meta.error && <Error text={meta.error} />}
		</div>
	);
};

export default Checkbox;
