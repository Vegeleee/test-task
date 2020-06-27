import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'

import styles from './index.module.scss'

const Main = () => {
	return (
		<main className={styles.main}>
			<Sidebar />
			<Content />
		</main>
	)
}

export default Main
