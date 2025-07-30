import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Profile from './Pages/Profile';
import AboutUs from './Pages/AboutUs';
import Categories from './Pages/Categories';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import AddFoodItems from './Pages/AddFoodItems';
import FoodItemDetails from './components/FoodItemDetails';
import EditProfile from './components/EditProfile';
import Order from './components/order';

import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ToastContainer className=" mt-28"/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/profile' element={<Profile />}>
            <Route path='/profile/edit' element={<EditProfile />} />
            <Route path='/profile/cart' element={<Cart />} />
            <Route path='/profile/order' element={<Order />} />
          </Route>
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/add-food-item' element={<AddFoodItems />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/food-item-details/:id' element={<FoodItemDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
