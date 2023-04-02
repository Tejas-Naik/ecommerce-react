import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";
import Checkout from "./routes/checkout/checkout.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import { onAuthStateChangedListener } from "./utils/firebase/firebase.utils";

import { setCurrentUser } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      dispatch(setCurrentUser(user));
    })
    return unsubscribe;
  }, []);


  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* Remember to outlet this */}
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />    { /*Nested Routes */}
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App;