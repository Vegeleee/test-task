import React from 'react'
import cn from 'classnames'

import unlockedIcon from './../../../../../images/card-icons/unlocked.svg'
import lockedIcon from './../../../../../images/card-icons/locked.svg'

import styles from './index.module.scss'

const Card = ({ data, desc, subdata, icon }) => {
	return (
		<div className={styles.card}>
			<div className={styles.cardData}>
				<div className={styles.cardDataText}>
					{data} <span className={cn('textGray', styles.cardDataTextGray)}>{desc}</span>
				</div>
				<div className={styles.cardDataIcon}>
					<img src={icon} alt="Icon" />
				</div>
			</div>
			{subdata && (
				<div className={styles.cardSubdata}>
					<span className="textGray">
						<img src={unlockedIcon} alt="Icon" className={styles.cardSubdataIcon} />
						{subdata.unlocked}
					</span>
					<span className={cn('textGray', styles.cardSubdataEllipse)}>&#8226;</span>
					<span className="textGray">
						<img src={lockedIcon} alt="Icon" className={styles.cardSubdataIcon} />
						{subdata.locked}
					</span>
				</div>
			)}
		</div>
	)
}

export default Card
