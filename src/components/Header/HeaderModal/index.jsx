import React from 'react'
import cn from 'classnames'

import copyIcon from './../../../images/account-icons/copy.svg'
import keyIcon from './../../../images/modal-icons/key.svg'
import pinCodeIcon from './../../../images/modal-icons/pin-code.svg'
import logoutIcon from './../../../images/modal-icons/logout.svg'

import styles from './index.module.scss'

const HeaderModal = ({ modalClassName }) => {
	return (
		<div className={cn(modalClassName, styles.modal)}>
			<div className={styles.modalHead}>
				<h2 className={styles.accountName}>Account name</h2>
				<div className={styles.accountId}>
					<span className={styles.accountIdText}>120sjgb86a9afafs216cfd3...</span>
					<img src={copyIcon} alt="Icon" className={styles.accountIdIcon} />
				</div>
			</div>
			<ul className={styles.modalList}>
				<li className={styles.modalListItem}>
					<img src={keyIcon} alt="Icon" className={styles.modalListItemIcon} />
					Set key
				</li>
				<li className={styles.modalListItem}>
					<img src={pinCodeIcon} alt="Icon" className={styles.modalListItemIcon} />
					Set pin-code
				</li>
				<li className={styles.modalListItem}>
					<img src={logoutIcon} alt="Icon" className={styles.modalListItemIcon} />
					Log out
				</li>
			</ul>
		</div>
	)
}

export default HeaderModal
