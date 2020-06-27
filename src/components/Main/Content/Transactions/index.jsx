import React from 'react'

import FilterButtons from './FilterButtons'
import MainButtons from './MainButtons'

import styles from './index.module.scss'
import TransactionsTable from './TransactionsTable'

const Transactions = () => {
	return (
		<div className={styles.transactions}>
			<div className={styles.header}>
				<h2>Transactions</h2>
				<div className={styles.buttons}>
					<FilterButtons />
					<MainButtons />
				</div>
			</div>
			<TransactionsTable />
		</div>
	)
}

export default Transactions
