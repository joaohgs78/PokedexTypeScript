import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// Pages
import Home from './pages/Home/Home'
import PokemonDetails from './pages/Details/Details'
import Pokebola from './pages/Pokebola/Pokebola'

function App() {
  return (
    <>
    <div className="overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/pokemon/:name" element={<PokemonDetails/>} ></Route>
          <Route path="/pokebola" element={<Pokebola/>} ></Route> 
        </Routes>
      </Router>
    </div>
    
  
    </>
  )
}

export default App
