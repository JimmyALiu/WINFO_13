import { useState } from 'react'
// import Login from './components/Login'
import Home from './components/Home'
import Navigation from './components/homeComponents/Navigation'

function App() {
	const [pageIndex, setPageIndex] = useState(0)

	const auto = <Navigation />
	

	switch (pageIndex) {
		case 1:
			return <div>
				{auto}
			</div>
			break;
		case 2:
			// code block
			break;
		default:
			// return (
			// 	<div>
			// 		<h1>Name of App</h1>
			// 		<Login></Login>
			// 	</div>
			// )
			return <div>
				{auto}
				<Home />
			</div>
	}
}

export default App
