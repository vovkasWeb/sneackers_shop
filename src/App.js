import Card from './components/Card'
import Drawer from './components/Drawer'
import Header from './components/Header'

const arr = [
	{
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 12999,
		imgageUrl: '/img/sneakers/1.jpg',
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		price: 15600,
		imgageUrl: '/img/sneakers/2.jpg',
	},
	{
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 8499,
		imgageUrl: '/img/sneakers/3.jpg',
	},
	{
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 8999,
		imgageUrl: '/img/sneakers/4.jpg',
	},
]

function App() {
	return (
		<div className='wrapper clear'>
			<Drawer />
			<Header />
			<div className='content p-40'>
				<div className='d-flex align-center justify-between mb-40'>
					<h1>Все кроссовки</h1>
					<img width={11} height={11} src='/img/plus.svg' alt='plus' />
					<div className='search-block d-flex'>
						<img src='/img/search.svg' alt='Seacrch' />
						<input placeholder='Поиск...' />
					</div>
				</div>

				<div className='d-flex'>
					{arr.map((obj, i) => (
						<Card
							key={i}
							obj={obj}
							onFavorute={() => console.log('Добавили в закладки')}
							onPlus={() => console.log('Нажали плюс')}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default App
