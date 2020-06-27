import React from 'react'

import accountIcon from './../../../../../images/account-icons/account-icon.png'
import chainIcon from './../../../../../images/account-icons/chain.svg'
import copyIcon from './../../../../../images/account-icons/copy.svg'

import styles from './index.module.scss'

const AccountInfo = () => {
	return (
		<div className={styles.accountInfo}>
			<img src={accountIcon} alt="Icon" className={styles.accountInfoIcon} />
			<div className={styles.accountInfoText}>
				<div className={styles.accountInfoTime}>
					<span className={styles.accountInfoTimeText}>
						<span className="textGray">by </span>
						<span>makeaccounts </span>
						<span className="textGray">2 hours ago</span>
					</span>
					<img src={chainIcon} alt="Chain" className={styles.accountInfoTextIcon} />
				</div>
				<div className={styles.accountInfoName}>
					Long account name
					<img src={copyIcon} alt="Copy" className={styles.accountInfoTextIcon} />
				</div>
			</div>
		</div>
	)
}

export default AccountInfo
