import { useState } from 'react'
// import Login from './components/Login'
import Home from './components/Home'
import Navigation from './components/homeComponents/Navigation'
import NearMe from './components/homeComponents/NearMe'
import Calendar from './components/Calendar'
import Messages from './components/Messages'

function App() {
	const [pageIndex, setPageIndex] = useState(0)

	const pages = {
		1: <NearMe />,
		2: <Calendar />,
		3: <Messages />,
		default: <Home />,
	}

	const auto = <Navigation setPageIndex={setPageIndex} pageIndex={pageIndex} />
	const renderPage = pages[pageIndex] || pages.default

	return (
		<div className="grid grid-cols-[max-content_4fr]">
			{auto}
			{renderPage}
		</div>
	)
}

export default App
