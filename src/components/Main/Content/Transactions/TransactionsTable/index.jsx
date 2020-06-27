import React from 'react'
import cn from 'classnames'

import Paginator from '../../../../Paginator'

import walletInTableIcon from './../../../../../images/transactions-icons/wallet-in-table.svg'
import walletOutTableIcon from './../../../../../images/transactions-icons/wallet-out-table.svg'

import styles from './index.module.scss'

import cbshuobipoolIcom from './../../../../../images/data-icons/cbshuobipool.png'
import cbsiomeetoneIcon from './../../../../../images/data-icons/cbsiomeetone.png'
import cbseouldotioIcon from './../../../../../images/data-icons/cbseouldotio.png'

const DATA = [
	{
		id: 0,
		date: '26 apr 2020',
		time: '14:16',
		user: {
			name: 'cbshuobipool',
			img: cbshuobipoolIcom,
		},
		count: '8.1213',
		currency: 'CBS',
		isIn: true,
	},
	{
		id: 1,
		date: '26 apr 2020',
		time: '14:16',
		user: {
			name: 'cbsiomeetone',
			img: cbsiomeetoneIcon,
		},
		count: '13.7653',
		currency: 'CBSCH',
		isIn: true,
	},
	{
		id: 2,
		date: '26 apr 2020',
		time: '14:16',
		user: {
			name: 'cbseouldotio',
			img: cbseouldotioIcon,
		},
		count: '159.1769 ',
		currency: 'CBS',
		isIn: false,
	},
	{
		id: 3,
		date: '26 apr 2020',
		time: '14:16',
		user: {
			name: 'cbshuobipool',
			img: cbshuobipoolIcom,
		},
		count: '6.9273',
		currency: 'CBS',
		isIn: true,
	},
	{
		id: 4,
		date: '26 apr 2020',
		time: '14:16',
		user: {
			name: 'cbsiomeetone',
			img: cbsiomeetoneIcon,
		},
		count: '12.1213 ',
		currency: 'CBS',
		isIn: false,
	},
	{
		id: 5,
		date: '26 apr 2020',
		time: '14:16',
		user: {
			name: 'cbseouldotio',
			img: cbseouldotioIcon,
		},
		count: '6.5128  ',
		currency: 'CBSCH',
		isIn: true,
	},
]

const TransactionsTable = () => {
	return (
		<div className={styles.wrapper}>
			<table className={styles.table}>
				<colgroup>
					<col width="50" />
					<col width="180" />
					<col />
					<col width="130" />
				</colgroup>
				<thead className={cn('textGray', styles.tableHead)}>
					<tr className={styles.tableRow}>
						<th className={styles.textAlignLeft}>Rank</th>
						<th className={styles.textAlignLeft}>Date &#8226; Time</th>
						<th className={styles.textAlignLeft}>Name</th>
						<th className={styles.textAlignCenter}>Balance</th>
					</tr>
				</thead>
				<tbody className={styles.tableBody}>
					{DATA.map(({ id, date, time, user, count, currency, isIn }) => (
						<tr key={id}>
							<td>
								<img src={isIn ? walletInTableIcon : walletOutTableIcon} alt="Icon" />
							</td>
							<td>
								{date} <span className="textGray">&#8226; {time}</span>
							</td>
							<td className={cn(styles.textAlignLeft, styles.tableRowName)}>
								<img src={user.img} alt="Icon" />
								{user.name}
							</td>
							<td className={styles.balance}>
								<span className={isIn ? styles.walletIn : ''}>{`${isIn ? '+' : '-'}${count}`}</span>{' '}
								<span className="textGray">{currency}</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<Paginator />
		</div>
	)
}

export default TransactionsTable
