import * as React from 'react';

import 'resource/fonts/font.less';

export enum EMIconType {
  Move = 'move',
  Add = 'add',
  Avatar = 'avatar'
}

export interface TIcon {
  /** id */
  id: string,
  /** type，枚举EMIconType */
  type: EMIconType
}

const Icon = (props: TIcon) => {
	const { id, type } = props;
	return (
		<span className="xt-icon" id={id}>
			<i className={`icon-${type}`}></i>
		</span>
	);
};

export default Icon;
