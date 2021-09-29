import * as React from 'react';
import { Radio as AntdRadio } from 'antd';
import Error from 'components/Error';

import './style.less';

export interface TRadioOption {
  id: string,
  label: string,
  value: string
}

export interface TRadio {
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
  options: TRadioOption[]
}

const Radio = (props: TRadio) => {
	const { meta = null, input = null, options, styleClassname, style, ...args } = props;
	return (
		<div className={`xt-radio ${styleClassname}`} style={style}>
			<AntdRadio.Group {...(input || {})} {...args}>
				{options && Array.isArray(options) && options.map((option: TRadioOption) => (
					<AntdRadio id={option.id} key={option.id} value={option.value}>{option.label}</AntdRadio>
				))}
			</AntdRadio.Group>
			{meta && meta.touched && meta.error && <Error text={meta.error} />}
		</div>
	);
};

export default Radio;
