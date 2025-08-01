import React, { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [NavColor, setNavColor] = useState(false);
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about-us" },
    { title: "Categories", path: "/categories" },
    { title: "Add Food Item", path: "/add-food-item" },
  ];

const handleScroll =()=>{
if(window.scrollY>20)
{
  setNavColor(true);
}
else
{
  setNavColor(false)
}


}

useEffect(() => {
  document.addEventListener('scroll',handleScroll);
}, [])



  

  return (
    <>
      <nav
        className={`fixed w-full z-50 text-white ${NavColor ? 'bg-zinc-900':'bg-transparent'} transition-all duration-300 lg:flex lg:justify-between lg:px-10 lg:py-8 items-center`}
      >
        <div className="text-3xl text-yellow-400 bg-zinc-950 py-8 lg:p-0 lg:bg-transparent px-8 flex justify-between items-center">
          <Link to="/">BHukkad Dost</Link>

          <FaBars
            className="lg:hidden cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>

        <div
          className={`lg:flex gap-6 ${showMenu ? 'block' : 'hidden'} py-10 lg:p-0 bg-zinc-900 lg:bg-transparent `}
        >
          {navLinks.map((items, i) => (
            <Link  className="text-xl block px-8 py-2 lg:p-0 hover:bg-yellow-400 lg:hover:bg-transparent hover:w-[100%] lg:hover:w-auto hover:text-black lg:hover:text-yellow-400"
              to={items.path}
              key={i}
            >
              {items.title}
            </Link>
          ))}

          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-2 mt-4 lg:mt-0">
            <div className="flex gap-4 lg:gap-3 pr-3 justify-around  text-white bg-zinc-800 lg:bg-transparent py-2 w-full">
              <Link to="/cart" onClick={() => setShowMenu(!showMenu)}>
                <FaShoppingCart className="text-xl hover:text-yellow-400 transition-all duration-300" />
              </Link>
              <Link to="/profile" onClick={() => setShowMenu(!showMenu)}>
                <CgProfile className="text-xl hover:text-yellow-400 transition-all duration-300" />
              </Link>
            </div>

            <div className="flex flex-row gap-2">
              <Link onClick={() => setShowMenu(!showMenu)}
                className="border bg-transparent px-4 py-1 font-semibold hover:text-yellow-400 hover:border-yellow-400 transition-all duration-300 text-center"
                to="/login"
              >
                LogIn
              </Link>
              <Link onClick={() => setShowMenu(!showMenu)}
                to="/signUp"
                className="bg-yellow-400 font-semibold px-4 py-1 text-black border-yellow-400 hover:text-white hover:border border transition-all duration-300 text-center"
              >
                SignUp
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
