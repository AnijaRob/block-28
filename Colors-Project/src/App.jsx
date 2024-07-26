import { Routes, Route, Link } from "react-router-dom"
import Red from "./red.jsx"
import Blue from "./blue.jsx"
import Green from "./green.jsx"
import Orange from "./orange.jsx"
import Purple from "./purple.jsx"
import Home from "./home.jsx"

function App() {
  
  return (
    <>
     <div id="container">
      
      <div id="navbar">
        <Link to='/'>Home</Link>
        <Link to='/blue'>Blue</Link>
        <Link to='/red'>Red</Link>
        <Link to='/green'>Green</Link>
        <Link to='/orange'>Orange</Link>
        <Link to='purple'>Purple</Link>
          
       
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue/>}/>
          <Route path="/red" element={<Red/>}/>
          <Route path="/green" element={<Green/>}/>
          <Route path="/orange" element={<Orange/>}/>
          <Route path="/purple" element={<Purple/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </div>

    <footer>
    <Link to='/'>Home</Link>
        <Link to='/blue'>Blue</Link>
        <Link to='/red'>Red</Link>
        <Link to='/green'>Green</Link>
        <Link to='/orange'>Orange</Link>
        <Link to='purple'>Purple</Link>
          
       
    </footer>
     
    </>
  )
}

export default App
