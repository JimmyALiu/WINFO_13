import { useState } from 'react'
// import Login from './components/Login'
import Home from './components/Home'

function App() {
	const [pageIndex, setPageIndex] = useState(0)

	switch (pageIndex) {
		case 1:
			// return 
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
			return <Home></Home>
	}
}

export default App
