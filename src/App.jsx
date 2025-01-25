import { useState } from 'react'
// import Login from './components/Login'
import Home from './components/Home'
import Navigation from './components/homeComponents/Navigation'
import Courses from './components/homeComponents/Courses'
import NearMe from './components/homeComponents/NearMe'

function App() {
	const [pageIndex, setPageIndex] = useState(0)

	const auto = <Navigation setPageIndex={setPageIndex} />


	switch (pageIndex) {
		case 1:
			return <div className='grid grid-cols-[max-content_4fr] gap-x-4"'>
				<div>
					{auto}
				</div>
				<div>
					<NearMe />
				</div>
			</div>
			
		case 2:
			return <div>
				{auto}
				<Courses />
			</div>
			
		default:
			return <div>
				{auto}
				<Home />
			</div>
	}
}

export default App
