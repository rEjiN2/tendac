import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom";
import Tenders from "./pages/Tenders"
function App() {
  

  return (
    <div>
       <Navbar/>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/tenders" element={<Tenders/>} />
         </Routes>
    </div>
  )
}

export default App
