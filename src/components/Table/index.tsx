import * as React from 'react';
import { Table as AntdTable } from 'antd';

import './style.less';

export enum EMColumnAlign {
  Left = 'left',
  Right = 'right',
  Center = 'center'
}

export interface TColumnItem {
  align?: EMColumnAlign,
  className?: string,
  dataIndex: string | string[],
}

export enum EMTabsType {
  Line = 'line',
  Card = 'card',
  EditableCard = 'editable-card'
}

export interface TTabs {
  /** 表格列的配置描述，具体项见下表 */
  columns?: any,
  /** 直接传入样式对象 */
  style?: any,
  /** 传入样式类 */
  styleClassname?: any,
  /**
  * 类型 
  * @default EMTabsType.Line
  */
  type?: EMTabsType,
  /**
  * 切换面板的回调	
  */
  onChange?: () => void,
  /**
  * 新增和删除页签的回调，在 type = EMTabsType.EditableCard 时有效
  */
  onEdit?: () => void,
}

const Table = (props: TTabs) => {
	const { styleClassname, style = {} } = props;
	return (
		<div className={`xt-table ${styleClassname}`} style={style}>
			<AntdTable />
		</div>
	);
};

export default Table;
