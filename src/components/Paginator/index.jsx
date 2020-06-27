import React from 'react'
import cn from 'classnames'

import styles from './index.module.scss'

const Paginator = () => {
	return (
		<div className={styles.paginator}>
			<button className={styles.page}>{'<'}</button>
			<button className={cn(styles.page, styles.pageActive)}>1</button>
			<button className={styles.page}>2</button>
			<button className={styles.page}>3</button>
			<button className={styles.page}>...</button>
			<button className={styles.page}>156</button>
			<button className={styles.page}>{'>'}</button>
		</div>
	)
}

export default Paginator
