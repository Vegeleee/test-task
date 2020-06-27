import React from 'react'

import walletIcon from './../../../images/sidebar-icons/wallet.svg'
import stakedIcon from './../../../images/sidebar-icons/staked.svg'
import ambassadorsIcon from './../../../images/sidebar-icons/ambassadors.svg'
import followersIcon from './../../../images/sidebar-icons/followers.svg'

import styles from './index.module.scss'

const Sidebar = () => {
	return (
		<aside>
			<nav>
				<ul className={styles.navList}>
					<li className={styles.navListItem}>
						<img src={walletIcon} alt="Icon" className={styles.navListItemIcon} />
						Wallet
					</li>
					<li className={styles.navListItem}>
						<img src={stakedIcon} alt="Icon" className={styles.navListItemIcon} />
						Staked
					</li>
					<li className={styles.navListItem}>
						<img src={ambassadorsIcon} alt="Icon" className={styles.navListItemIcon} />
						Ambassadors
					</li>
					<li className={styles.navListItem}>
						<img src={followersIcon} alt="Icon" className={styles.navListItemIcon} />
						Followers
					</li>
				</ul>
			</nav>
		</aside>
	)
}

export default Sidebar
