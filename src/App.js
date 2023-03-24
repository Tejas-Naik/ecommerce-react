import { Route, Routes, Outlet } from "react-router-dom";
import Home from "./routes/home/home.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route path="shop" element={<h1>Hello from shop page</h1>} />
      </Route>
    </Routes>
  )
}

export default App;