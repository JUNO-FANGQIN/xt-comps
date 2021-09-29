import * as React from 'react';

import styles from './style.css';

const Loading = React.forwardRef((props, ref: any) => {
	console.log('loading ref', ref);
	return <button ref={ref} className={styles.loading}>loading</button>;
});

export default Loading;
