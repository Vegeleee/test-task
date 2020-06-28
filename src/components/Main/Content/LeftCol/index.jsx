import React from 'react'

import AccountInfo from './AccountInfo'
import Card from './Card'
import Resources from './Resources'

import cardIconFirst from './../../../../images/card-icons/card-icon-1.png'
import cardIconSecond from './../../../../images/card-icons/card-icon-2.png'

import styles from './index.module.scss'

const LeftCol = () => {
	return (
		<div className={styles.leftCol}>
			<AccountInfo />
			<Card
				data={'1 731.1382'}
				desc={'CBS'}
				subdata={{ unlocked: '573.1355', locked: '1231.1423' }}
				icon={cardIconFirst}
			/>
			<Card data={'142.1382'} desc={'CBSCH'} icon={cardIconSecond} />
			<Resources />
		</div>
	)
}

export default LeftCol
