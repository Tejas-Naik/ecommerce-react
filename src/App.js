import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* Remember to outlet this */}
        <Route index element={<Home />} />
        <Route path="/shop" element={<h1>Shop Page</h1>} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App;