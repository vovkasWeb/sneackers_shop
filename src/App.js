function App() {
	return (
		<div className='wrapper clear'>
			<header className="d-flex justify-between">
				<div className='d-flex aligh-center'>
					<img width={40} height={40} src='/img/logo.svg' alt='' />
					<div className='headerInfo'>
						<h3>REACT SNEAKERS</h3>
						<p>Магазин лучших кроссовок</p>
					</div>
				</div>
				<ul className='headerRight'>
					<li>
						<img width={18} height={18} src='/img/cart.svg' alt='' />
						<span>1205 руб.</span>
					</li>
					<li>
						<img width={18} height={18} src='/img/user.svg' alt='' />
					</li>
				</ul>
			</header>
			<div className='content'>
				<h1>Все кроссовки</h1>
				....
			</div>
		</div>
	)
}

export default App
