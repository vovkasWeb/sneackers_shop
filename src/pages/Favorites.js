import React from 'react'
import Card from '../components/Card'

const Favorites = ({ items, onAddToFavorite }) => {
	return (
		<div className='content p-40'>
			<div className='d-flex align-center justify-between mb-40'>
				<h1>Мои закладки</h1>
			</div>

			<div className='d-flex flex-wrap'>
				{items ? (
					items.map((item, i) => (
						<Card
							key={i}
							obj={item}
							id={i}
							favorited={true}
							onAddToFavorite={onAddToFavorite}
						/>
					))
				) : (
					<h3>Loadind...</h3>
				)}
			</div>
		</div>
	)
}

export default Favorites
