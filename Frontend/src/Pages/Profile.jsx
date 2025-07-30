import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import ProfileShimer from './ProfileShimer';
axios.defaults.baseURL = 'https://api.karauli.store';




function Profile() {
  const [Profile, setProfile] = useState(null);

const headers ={
  id: localStorage.getItem("id"),
  role:localStorage.getItem("role"),
  token:localStorage.getItem("token")
}

const navigate = useNavigate();

  useEffect(() => {
    const userData = async () => {
            try {
              
                const response = await axios.get("/user-info",{headers});
                setProfile(response.data.data);
               
             
              }
           catch (error) {
                console.error(error);
            }
       
          }
          userData();
      
    }, []);

const logout=()=>{
  localStorage.clear("id")
  navigate("/login");


}

console.log(Profile);

  return (
    <>
      {
        Profile ? (   <div className='bg-zinc-800 h-[150vh] flex'>

          <div className='h-full text-white bg-zinc-900 w-[20%] pt-28  flex  flex-col items-center'>
    
        <img src={Profile.avatar} alt={Profile.username} className='h-[80px] w-[80px]'/>
    
        <h1 className='text-white text-2xl font-bold pt-2'>
          {Profile.username}
        </h1>
    <h1 className='text-gray-500'>
      {Profile.email}
    </h1>
    <Link to={'/profile/edit'} className='text-yellow-400 flex items-center gap-2 py-2 '>
      Edit Profile <FiEdit />
    </Link>
       
      <div className='bg-zinc-700 h-[1px] w-[80%] my-4'/>
    
    <Link to={'/profile/cart'} className='text-2xl flex items-center gap-3'> 
      Cart
      <FaShoppingCart className='text-yellow-400'/>
    </Link>
    <div className='bg-zinc-700 h-[1px] w-[80%] my-4'/>
    <Link to={'/profile/order'} className='text-2xl flex items-center gap-3 '> 
      Orders
      <FaBoxOpen className='text-yellow-400'/>
    </Link>      
    <div className='bg-zinc-700 h-[1px] w-[80%] my-4'/>
    
    <button className='bg-yellow-400 text-zinc-950 px-6 py-1 font-bold' onClick={logout}> 
      Logout
    </button>
    
          </div>
          <div className='bg-zinc-800 h-full  w-[80%]'>
            <Outlet></Outlet>
            
            
          </div>
         
        </div>):(<ProfileShimer/>)
      }
</>

 
    
  
  )
}

export default Profile