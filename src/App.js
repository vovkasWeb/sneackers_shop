import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
import Drawer from './components/Drawer'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'

function App() {
	const [items, setItems] = useState([])
	const [cartItems, setCartItems] = useState([])
	const [favorites, setFavorites] = useState([])
	const [seacrchValue, setSeacrchValue] = useState('')
	const [cardOpened, setCardOpened] = useState(false)

	useEffect(() => {
		// fetch('https://6542a2a7ad8044116ed3b511.mockapi.io/sneakers')
		// 	.then(res => res.json())
		// 	.then(obj => setItems(obj))
		axios
			.get('https://6542a2a7ad8044116ed3b511.mockapi.io/sneakers')
			.then(res => setItems(res.data))
		axios
			.get('https://6542a2a7ad8044116ed3b511.mockapi.io/cart')
			.then(res => setCartItems(res.data))

		axios
			.get('https://654e52f4cbc325355742bfee.mockapi.io/favorites')
			.then(res => setFavorites(res.data))
	}, [])

	const onAddToCart = obj => {
		console.log(obj)
		axios.post('https://6542a2a7ad8044116ed3b511.mockapi.io/cart', obj)
		setCartItems(prev => [...prev, obj])
	}
	const onDeleteCart = id => {
		axios.delete(`https://6542a2a7ad8044116ed3b511.mockapi.io/cart/${id}`)
		setCartItems([...cartItems].filter((item, i) => i !== id))
	}
	const onAddToFavorite = obj => {
		if (favorites.find(obj0 => obj0.id === obj.id)) {
			axios.delete(
				`https://654e52f4cbc325355742bfee.mockapi.io/favorites/${obj.id}`
			)
			setFavorites(prev => [...prev, obj])
		}else{
		axios.post('https://654e52f4cbc325355742bfee.mockapi.io/favorites', obj)
		setFavorites(prev => [...prev, obj])
		}
	}

	const onChangeSearchInput = value => {
		setSeacrchValue(value)
	}

	return (
		<div className='wrapper clear'>
			{cardOpened && (
				<Drawer
					items={cartItems}
					onClose={() => setCardOpened(false)}
					onDelete={onDeleteCart}
				/>
			)}
			<Header onClickCart={() => setCardOpened(true)} />
			<Routes>
				<Route
					path='/'
					element={
						<Home
							items={items}
							seacrchValue={seacrchValue}
							setSeacrchValue={setSeacrchValue}
							onChangeSearchInput={onChangeSearchInput}
							onAddToFavorite={onAddToFavorite}
							onAddToCart={onAddToCart}
						/>
					}
				/>
				<Route
					path='/favorites'
					element={
						<Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
					}
				/>
			</Routes>
		</div>
	)
}

export default App
