import React from 'react'
import Card from '../components/Card'

const Home = ({
	items,
	seacrchValue,
	setSeacrchValue,
	onChangeSearchInput,
	onAddToFavorite,
	onAddToCart
}) => {
	return (
		<div className='content p-40'>
			<div className='d-flex align-center justify-between mb-40'>
				<h1>Все кроссовки</h1>
				<img width={11} height={11} src='/img/plus.svg' alt='plus' />
				<div className='search-block d-flex'>
					<img src='/img/search.svg' alt='Seacrch' />
					{seacrchValue && (
						<img
							className='clear cu-p'
							onClick={() => setSeacrchValue('')}
							src='/img/btn-remove.svg'
							alt='Clear'
						/>
					)}
					<input
						onChange={e => {
							onChangeSearchInput(e.target.value)
						}}
						value={seacrchValue}
						placeholder='Поиск...'
					/>
				</div>
			</div>

			<div className='d-flex flex-wrap'>
				{items ? (
					items
						.filter(item =>
							item.title
								.toLocaleLowerCase()
								.includes(seacrchValue.toLocaleLowerCase())
						)
						.map((item, i) => (
							<Card
								key={i}
								obj={item}
								id={i}
								onFavorute={onAddToFavorite}
								onPlus={obj => onAddToCart(obj)}
							/>
						))
				) : (
					<h3>Loadind...</h3>
				)}
			</div>
		</div>
	)
}

export default Home
