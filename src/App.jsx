import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import History from './pages/History'
import Settings from './pages/Settings'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/favorites' element={<Favorites />}/>
      <Route path='history' element={<History />}/>
      <Route path='settings' element={<Settings />}/>
    </Routes>
  )
}

export default App
