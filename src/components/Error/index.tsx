import * as React from 'react';

import './style.less';

interface TError {
  /** 提示内容 */
  text: string,
}

const Error = (props: TError) => {
	return (
		<div className="xt-error">{props.text}</div>
	);
};

export default Error;
