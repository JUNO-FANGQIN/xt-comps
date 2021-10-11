import * as React from 'react';
import { Input as AntdInput } from 'antd';
import Error from 'components/Error';

import './style.less';

export enum EMInputType {
  Input = 'Input',
  Password = 'Password',
  Search = 'Search'
}

export enum EMInputSize {
  Large = 'large',
  Middle = 'middle',
  Small = 'small',
}

export interface TInput {
  /** 对此组建的引用 */
  ref?: string,
  /** 辅助测试自动化 */
  id: string,
  /**
  * 类型 
  * @default EMInputType.Input
  */
  type?: EMInputType,
  /**
  * 型号，参照antd的size
  * @default EMButtonSize.Large
  */
  size?: EMInputSize,
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
  /** 占位提示 */
  placeholder?: string,
  /** 可以点击清除图标删除内容 */
  allowClear?: boolean,
  /** 添加后缀 */
  suffix?: any,
}
export default class Input extends React.Component<TInput> {
  render(){
    const { meta = null, input = null, id, type = EMInputType.Input, size = EMInputSize.Large, ...args } = this.props;
    const commonProps = {
      id: id,
      size: size,
      autoComplete: 'off',
      ...(input || {}),
      ...args,
      suffix: args.suffix && <span className="xt-input-suffix">{args.suffix}</span>
    };
    return (
      <div className="xt-input">
        {type === EMInputType.Input && <AntdInput {...commonProps} />}
        {type === EMInputType.Password && (!input || input.value ? <AntdInput.Password visibilityToggle {...commonProps} /> : <AntdInput {...commonProps} />)}
        {type === EMInputType.Search && <AntdInput.Search {...commonProps} />}
        {meta && meta.touched && meta.error && <Error text={meta.error} />}
      </div>
    );
  }
}

// const Input = (props: TInput) => {
// 	const { meta = null, input = null, id, type = EMInputType.Input, size = EMInputSize.Large, ...args } = props;
// 	console.log('props', props);
// 	const commonProps = {
// 		id: id,
// 		size: size,
// 		autoComplete: 'off',
// 		...(input || {}),
// 		...args,
// 		suffix: args.suffix && <span className="xt-input-suffix">{args.suffix}</span>
// 	};
// 	return (
// 		<div className="xt-input">
// 			{type === EMInputType.Input && <AntdInput {...commonProps} />}
// 			{type === EMInputType.Password && (!input || input.value ? <AntdInput.Password visibilityToggle {...commonProps} /> : <AntdInput {...commonProps} />)}
// 			{type === EMInputType.Search && <AntdInput.Search {...commonProps} />}
// 			{meta && meta.touched && meta.error && <Error text={meta.error} />}
// 		</div>
// 	);
// };

// export default Input;
