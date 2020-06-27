import React from 'react'
import cn from 'classnames'

import styles from './index.module.scss'

const Resources = () => {
	return (
		<div className={styles.resources}>
			<h3>Resources</h3>
			<div className={styles.item}>
				<div className={styles.itemName}>RAM</div>
				<div className={styles.itemInfo}>
					<div className={styles.itemIcon}>
						<svg width="100%" height="100%" viewBox="0 0 48 48">
							<circle
								cx="24"
								cy="24"
								r="15.91549430918954"
								fill="transparent"
								stroke="#d2d3d4"
								strokeWidth="6"
							></circle>
							<circle
								cx="24"
								cy="24"
								r="15.91549430918954"
								fill="transparent"
								stroke="#27ae60"
								strokeWidth="8"
								strokeDasharray="43 57"
								strokeDashoffset="25"
							></circle>
						</svg>
					</div>
					<div className={styles.itemText}>
						<div className={styles.itemTextPercents}>43.20%</div>
						<div className={cn('textGray', styles.itemTextCount)}>30.73 MB / 34.65 MB</div>
					</div>
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.itemName}>CPU</div>
				<div className={styles.itemInfo}>
					<div className={styles.itemIcon}>
						<svg width="100%" height="100%" viewBox="0 0 48 48">
							<circle
								cx="24"
								cy="24"
								r="15.91549430918954"
								fill="transparent"
								stroke="#d2d3d4"
								strokeWidth="6"
							></circle>
							<circle
								cx="24"
								cy="24"
								r="15.91549430918954"
								fill="transparent"
								stroke="#eb5757"
								strokeWidth="8"
								strokeDasharray="76 24"
								strokeDashoffset="25"
							></circle>
						</svg>
					</div>
					<div className={styles.itemText}>
						<div className={styles.itemTextPercents}>76.20%</div>
						<div className={cn('textGray', styles.itemTextCount)}>∞ µs / ∞ µs</div>
					</div>
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.itemName}>NET</div>
				<div className={styles.itemInfo}>
					<div className={styles.itemIcon}>
						<svg width="100%" height="100%" viewBox="0 0 48 48">
							<circle
								cx="24"
								cy="24"
								r="15.91549430918954"
								fill="transparent"
								stroke="#d2d3d4"
								strokeWidth="6"
							></circle>
							<circle
								cx="24"
								cy="24"
								r="15.91549430918954"
								fill="transparent"
								stroke="#2fa7e3"
								strokeWidth="8"
								strokeDasharray="100 0"
								strokeDashoffset="25"
							></circle>
						</svg>
					</div>
					<div className={styles.itemText}>
						<div className={styles.itemTextPercents}>100%</div>
						<div className={cn('textGray', styles.itemTextCount)}>∞ µs / ∞ µs</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Resources
