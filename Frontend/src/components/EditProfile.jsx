import React,{useState,useEffect, use} from 'react'
import axios from 'axios';
axios.defaults.baseURL = 'api.karauli.store';

function EditProfile() {
    
  const [Profile, setProfile] = useState({});

  const [Avatar, setAvatar] = useState();
  const [Address, setAddress] = useState();
  const [OldPassword, setOldPassword] = useState();
  const [NewPassword, setNewPassword] = useState()
  const [ConfirmPassword, setConfirmPassword] = useState()
  



const headers ={
  id: localStorage.getItem("id"),
  role:localStorage.getItem("role"),
  token:localStorage.getItem("token")
}

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


  return (

    <div className='text-white content-center h-[100vh] justify-center flex flex-col items-center pt-56 '>

            
 <h1 className='text-2xl font-bold py-4 text-yellow-400'> Edit Profile</h1>


<div> 
<img src={Profile.avatar} alt={Profile.username} className='h-[80px] w-[80px]'/>

</div>


            
            <div className="mt-1 flex  justify-center">
              <div className=" text-center">
               
                <div className="flex text-sm text-zinc-400">
                  <label 
                    htmlFor="image" 
                    className="relative cursor-pointer bg-zinc-800 rounded-md font-medium text-yellow-400 hover:text-yellow-300"
                  >
                    <span>Upload a file</span>
                    <input 
                      id="image" 
                      name="image" 
                      type="file" 
                      className="sr-only" 
                      accept="image/*"
                      onChange={(e)=>setAvatar(e.target.files[0])}
                    />
                  </label>
            
                </div>
               
              </div>
        </div>    
       


          <div className='py-6 '>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1">
                Username
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={Profile.username}
                disabled
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:border-yellow-400 text-zinc-500"
                placeholder="add food name"
              />
          


            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1">
              Address 
              </label>
              <textarea
                id="name"
                name="name"
               placeholder={Profile.address}
                onChange={(e)=>setAddress(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:border-yellow-400 text-zinc-200 placeholder-zinc-200"
              
              />
            </div>
      


      <div>
      <label className=' my-2 w-[300px] bg-zinc-800  ' htmlFor="password">Old Password : </label> <br/>
      <input  value={OldPassword}onChange={(e)=>setOldPassword(e.target.value)}   className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:border-yellow-400 text-zinc-200 placeholder-zinc-500"
               type="password" name='password' placeholder='Old Password'/> <br/>
      <label className=' my-2 w-[300px] bg-zinc-800  ' htmlFor="password">New Password : </label> <br/>
    <input  value={NewPassword}onChange={(e)=>setNewPassword(e.target.value)} className='  px-2 py-1  my-2 w-[300px] focus:outline-none focus:border-yellow-400 bg-zinc-800 border border-zinc-600 ' type="password" name='password' placeholder=' New Password'/> <br/>
    <label className=' my-2 w-[300px] bg-zinc-800 ' htmlFor="password"> Confirm Password : </label> <br/>
    <input  value={ConfirmPassword}onChange={(e)=>setConfirmPassword(e.target.value)} className='  px-2 py-1  my-2 w-[300px] focus:outline-none focus:border-yellow-400 bg-zinc-800 border border-zinc-600  ' type="password" name='conPassword' placeholder='Confirm Password'/> <br/>
  
      </div>

      <div className='flex justify-center '>
    <button className=' bg-yellow-400 text-zinc-900 font-semibold py-2 px-8  ' > Update</button>
    </div>

           
      </div>
    </div>
  )
}

export default EditProfile