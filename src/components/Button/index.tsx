import * as React from 'react';
import classNames from 'classnames';
import Loading from 'components/Loading';

require('./style.less')

export enum EMButtonType {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Dashed = 'Dashed',
  Danger = 'Danger',
  Warn = 'Warn',
}

export enum EMButtonSize {
  Large = 'Large',
  Medium = 'Medium',
  Small = 'Small',
}

interface TButton {
  /** 辅助测试自动化 */
  id: string,
  /**
  * 类型 
  * @default EMButtonType.Primary
  */
  type?: EMButtonType,
  /**
  * 型号 
  * @default EMButtonSize.Large
  */
  size?: EMButtonSize,
  /**
  * 文案
  * @default 确定
  */
  text?: string,
  /** 操作函数 */
  onClick?: (e: any) => void,
  
  /** @default false */
  disabled?: boolean,
  loading?: boolean,
  /** 样式 */
  style?: any,
  icon?: any,
  styleClassname?: any
}

export default class Button extends React.Component<TButton> {
	render() {
		const {
			id,
			text,
			loading,
			disabled,
			icon,
			onClick,
			type = EMButtonType.Primary,
			size = EMButtonSize.Large,
			style,
			styleClassname,
		} = this.props || {};
	
		const classnames = classNames({
			'xt-button': true,
			'xt-medium-button': size === EMButtonSize.Medium,
			'xt-small-button': size === EMButtonSize.Small,
			'xt-primary-button': type === EMButtonType.Primary,
			'xt-secondary-button': type === EMButtonType.Secondary,
			'xt-dashed-button': type === EMButtonType.Dashed,
			'xt-danger-button': type === EMButtonType.Danger,
			'xt-warn-button': type === EMButtonType.Warn,
			'xt-disabled-button': disabled || loading,
			[styleClassname]: true
		});
		return (
			<button
				// ref={ref}
				id={id}
				className={classnames}
				style={style}
				onClick={onClick}
				disabled={disabled || loading}
			>
				{icon && <span className="xt-button-icon">{icon}</span>}
				{loading ? <Loading /> : (text || '确定')}
			</button>
		);
	}
}


// const Button: React.FC<TButton> = React.forwardRef((props: TButton, ref: any) => {
// 	const {
// 		id,
// 		text,
// 		loading,
// 		disabled,
// 		icon,
// 		onClick,
// 		type = EMButtonType.Primary,
// 		size = EMButtonSize.Large,
// 		style,
// 		styleClassname,
// 	} = props || {};

// 	const classnames = classNames({
// 		'xt-button': true,
// 		'xt-medium-button': size === EMButtonSize.Medium,
// 		'xt-small-button': size === EMButtonSize.Small,
// 		'xt-primary-button': type === EMButtonType.Primary,
// 		'xt-secondary-button': type === EMButtonType.Secondary,
// 		'xt-dashed-button': type === EMButtonType.Dashed,
// 		'xt-danger-button': type === EMButtonType.Danger,
// 		'xt-warn-button': type === EMButtonType.Warn,
// 		'xt-disabled-button': disabled || loading,
// 		[styleClassname]: true
// 	});
// 	return (
// 		<button
// 			ref={ref}
// 			id={id}
// 			className={classnames}
// 			style={style}
// 			onClick={onClick}
// 			disabled={disabled || loading}
// 		>
// 			{icon && <span className="xt-button-icon">{icon}</span>}
// 			{loading ? <Loading /> : (text || '确定')}
// 		</button>
// 	);
// });

// export default Button;
