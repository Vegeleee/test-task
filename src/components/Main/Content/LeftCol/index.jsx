import React from 'react'

import AccountInfo from './AccountInfo'
import Card from './Card'
import Resources from './Resources'

import styles from './index.module.scss'

const LeftCol = () => {
	return (
		<div className={styles.leftCol}>
			<AccountInfo />
			<Card data={'1 731.1382'} desc={'CBS'} subdata={{ unlocked: '573.1355', locked: '1231.1423' }} />
			<Card data={'142.1382'} desc={'CBSCH'} />
			<Resources />
		</div>
	)
}

export default LeftCol
