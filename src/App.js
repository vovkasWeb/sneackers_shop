import { useEffect, useState } from 'react'
import Card from './components/Card'
import Drawer from './components/Drawer'
import Header from './components/Header'

function App() {
	const [items, setItems] = useState([])
	const [cartItems, setCartItems] = useState([])
	const [cardOpened, setCardOpened] = useState(false)

	useEffect(() => {
		fetch('https://6542a2a7ad8044116ed3b511.mockapi.io/sneakers')
			.then(res => res.json())
			.then(obj => setItems(obj))
	}, [])

	const onAddToCart = obj => {
		setCartItems(prev => [...prev, obj])
	}

	return (
		<div className='wrapper clear'>
			{cardOpened && (
				<Drawer items={cartItems} onClose={() => setCardOpened(false)} />
			)}
			<Header onClickCart={() => setCardOpened(true)} />
			<div className='content p-40'>
				<div className='d-flex align-center justify-between mb-40'>
					<h1>Все кроссовки</h1>
					<img width={11} height={11} src='/img/plus.svg' alt='plus' />
					<div className='search-block d-flex'>
						<img src='/img/search.svg' alt='Seacrch' />
						<input placeholder='Поиск...' />
					</div>
				</div>

				<div className='d-flex flex-wrap'>
					{items ? (
						items.map((item, i) => (
							<Card
								key={i}
								obj={item}
								onFavorute={() => console.log('Добавили в закладки')}
								onPlus={obj => onAddToCart(obj)}
							/>
						))
					) : (
						<h3>Loadind...</h3>
					)}
				</div>
			</div>
		</div>
	)
}

export default App
