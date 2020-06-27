import React from 'react'
import logo from './../../images/logo.png'
import accountIcon from './../../images/account-icons/account-icon.png'
import styles from './index.module.scss'
import HeaderModal from './HeaderModal'

class Header extends React.Component {
	state = {
		isModalShow: false,
	}

	toggleModal = () => {
		this.setState({
			isModalShow: !this.state.isModalShow,
		})
	}

	render() {
		const { isModalShow } = this.state

		return (
			<header>
				<a href="#">
					<img src={logo} alt="Logo" />
				</a>
				<div className={styles.accountInfo} onClick={this.toggleModal}>
					<h3>Account name</h3>
					<img src={accountIcon} alt="Icon" className={styles.accountIcon} />
					{isModalShow && <HeaderModal />}
				</div>
			</header>
		)
	}
}

export default Header
