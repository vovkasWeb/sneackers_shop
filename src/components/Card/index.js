import { useState } from 'react'
import styles from './Card.module.scss'

const Card = ({ obj: { title, price, imgageUrl }, onFavorute, onPlus }) => {
	const [isAdded, setIsAdded] = useState(false)

	const onClickPlus = () => {
		onPlus({ title, price, imgageUrl })
		setIsAdded(!isAdded)
	} 
	return (
		<div className={styles.card}>
			<div className={styles.favorite} onClick={onFavorute}>
				<img src='/img/heart-unliked.svg' alt='unliked' />
			</div>
			<img width={133} height={112} src={imgageUrl} alt='Sneakers' />
			<h5>{title}</h5>
			<div className='d-flex justify-between align-center'>
				<div className='d-flex flex-column'>
					<span>Цена:</span>
					<b>{price} руб.</b>
				</div>
				<img
					className={styles.plus}
					onClick={onClickPlus}
					src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
					alt='plus'
				/>
			</div>
		</div>
	)
}

export default Card