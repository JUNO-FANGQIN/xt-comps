import * as React from 'react';
import { Select as AntdSelect } from 'antd';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import Error from 'components/Error';

import './style.less';

export interface TSelectOption {
  id: string,
  label: any,
  value: string,
  disabled?: boolean
}

export enum TSelectMode {
  Multiple = 'multiple',
  Tags = 'tags'
}

export interface TSelect {
  /** 辅助测试自动化 */
  id: string,
  /** 下拉选项 */
  options: TSelectOption[],
  /** 下拉模式 */
  mode: TSelectMode,
  /** 最多展示选择的个数, 多余的折叠在一起 */
  maxTagCount: number,
  /** 不用手动传，当此组件作为Field组建的component属性时会自动传递 */
  meta?: any,
  /** 不用手动传，当此组件作为Field组建的component属性时会自动传递 */
  input?: any,
  /** alert 详细描述 */
  style?: any,
  /** 传入样式类 */
  styleClassname?: any
}

const getSuffixIcon = ({ open }: any) => {
	const iconStyle = { color: 'rgb(0, 0, 0, 0.85)' };
	if (open) return <CaretUpOutlined style={iconStyle} />;
	return <CaretDownOutlined style={iconStyle} />;
};

const Select = (props: TSelect) => {
	const { meta = null, input = null, options, styleClassname, style, ...args } = props;
	return (
		<div className={`xt-select ${styleClassname}`} style={style}>
			<AntdSelect suffixIcon={getSuffixIcon} showArrow {...(input || {})} {...args}>
				{Array.isArray(options) && options.map((option: TSelectOption) => (
					<AntdSelect.Option
						id={option.id}
						key={option.id || option.value}
						value={option.value}
						disabled={option.disabled}>
						{option.label}
					</AntdSelect.Option>
				))}
			</AntdSelect>
			{meta && meta.touched && meta.error && <Error text={meta.error} />}
		</div>
	);
};

export default Select;
