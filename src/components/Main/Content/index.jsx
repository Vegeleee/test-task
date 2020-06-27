import React from 'react'

import LeftCol from './LeftCol'

import styles from './index.module.scss'
import Transactions from './Transactions'

const Content = () => {
	return (
		<div className={styles.mainContent}>
			<LeftCol />
			<Transactions />
		</div>
	)
}

export default Content
