import { useState } from 'react'
import Login from './components/Login'

function App() {
  const [ pageIndex, setPageIndex ] = useState(0)
  
  return (
    <>
		<Login></Login>
    </>
  )
}

export default App
