import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";

const Navigation = () => {
  return (
    <div>
      <h1>Navigation</h1>
      <Outlet />
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<h1>Shop Page</h1>} />
      </Route>
    </Routes>
  )
}

export default App;