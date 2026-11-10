import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Shop from "./Components/Shop";
import Contact from "./Components/Contact";
import Newborn from "./Components/Newborn";
import Girls from "./Components/Girls";
import Boys from "./Components/Boys";
import Products from "./Components/Products";
import Blog from "./Components/Blog";
import Wishlist from "./Components/Wishlist";
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Orderplaced from "./Components/Orderplaced";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/newborn' element={<Newborn/>}></Route>
        <Route path='/girls' element={<Girls/>}></Route>
        <Route path='/boys' element={<Boys/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path="/product/:id" element={<Products/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/wishlist' element={<Wishlist/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/orderplaced' element={<Orderplaced/>}></Route>

      </Routes>
         </BrowserRouter>
    </>
  );
}

export default App;