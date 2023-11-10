import { useState } from 'react'
import axios from 'axios'
import styles from './Card.module.scss'

const Card = ({ obj: { title, price, imgageUrl },id, onFavorute, onPlus,favorited=false, added=false}) => {
	const [isAdded, setIsAdded] = useState(added)
	const [isFovorite, setIsFovorite] = useState(favorited)

	const onClickPlus = () => {
		onPlus({ title, price, imgageUrl,id })
		setIsAdded(!isAdded)
	}
	const onAddToCart = obj => {
		console.log(obj)
		axios.post('https://6542a2a7ad8044116ed3b511.mockapi.io/cart', obj)
		// setCartItems(prev => [...prev, obj])
	}
	const onClickFavorite = () =>{
		onFavorute({ title, price, imgageUrl, id })
		setIsFovorite(!isFovorite)
	}

	return (
		<div className={styles.card}>
			<div className={styles.favorite} onClick={onClickFavorite}>
				<img
					src={isFovorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'}
					alt='unliked'
				/>
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
