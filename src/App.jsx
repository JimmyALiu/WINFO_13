import { useState } from 'react'
// import Login from './components/Login'

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
			return <p>homepage</p>
	}
}

export default App
