import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* Remember to outlet this */}
        <Route index element={<Home />} />
        <Route path="/shop" element={<h1>Shop Page</h1>} />
      </Route>
    </Routes>
  )
}

export default App;