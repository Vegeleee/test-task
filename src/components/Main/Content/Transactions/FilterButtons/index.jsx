import React from 'react'
import cn from 'classnames'

import styles from './index.module.scss'

const FilterButtons = () => {
	return (
		<div className={styles.filterButtons}>
			<div className={styles.filterButtonsGroup}>
				<button className={cn(styles.filterButton, styles.filterButtonActive)}>All</button>
				<button className={styles.filterButton}>In</button>
				<button className={styles.filterButton}>Out</button>
			</div>
			<div className={styles.filterButtonsGroup}>
				<button className={cn(styles.filterButton, styles.filterButtonActive)}>All</button>
				<button className={styles.filterButton}>CBS</button>
				<button className={styles.filterButton}>CBSCH</button>
			</div>
		</div>
	)
}

export default FilterButtons
