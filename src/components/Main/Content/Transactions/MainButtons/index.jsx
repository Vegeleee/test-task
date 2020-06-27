import React from 'react'
import cn from 'classnames'

import walletOutIcon from './../../../../../images/transactions-icons/wallet-out.svg'
import walletInIcon from './../../../../../images/transactions-icons/wallet-in.svg'

import styles from './index.module.scss'

const MainButtons = () => {
	return (
		<div className={styles.mainButtons}>
			<button className={cn(styles.mainButton, styles.mainButtonPrimary)}>
				<img src={walletOutIcon} alt="Icon" className={styles.mainButtonIcon} />
				Send
			</button>
			<button className={cn(styles.mainButton, styles.mainButtonSecondary)}>
				<img src={walletInIcon} alt="Icon" className={styles.mainButtonIcon} />
				Recieve
			</button>
		</div>
	)
}

export default MainButtons
