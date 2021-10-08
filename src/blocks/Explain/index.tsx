import * as React from 'react';

import './style.less';

export interface TExplainItem {
	key: string,
	content: string
}

export interface TExplain {
	/** 标题，默认值为“说明：” */
	title?: string,
	/** 内容 */
	list: TExplainItem[],
	/** 直接传入样式对象 */
	style?: any,
	/** 传入样式类 */
	styleClassname?: any
}

const Explain = (props: TExplain) => {
	const { title, list, styleClassname, style } = props;
	return (
		<div className={`xt-explain ${styleClassname}`} style={style}>
			<div className="xt-explain-title">{title || '说明：'}</div>
			<ol className="xt-explain-ol">
				{Array.isArray(list) && list.map((item: TExplainItem) => (
					<li key={item.key}>{item.content}</li>
				))}
			</ol>
		</div>
	);
};

export default Explain;
