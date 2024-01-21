import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import OpenCards from "./pages/OpenCards";

const Home = () => {
  return(
    <div>Home</div>
  )
}

function App() {

  return (
    <BrowserRouter>
      <nav>
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/openCards">Open Cards</Link> </li>
          </ul>
      </nav>
      <Routes>
          <Route path="/openCards" element={<OpenCards />}></Route>
          <Route path="/" element={<Home />}></Route>
      </Routes>
</BrowserRouter>
  )
}

export default App
