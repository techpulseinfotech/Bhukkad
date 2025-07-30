import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
axios.defaults.baseURL = 'https://api.karauli.store';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/logIn', {
        username: username,
        password: password,
      });

      if (response.data.Message) {
        
        toast.error(response.data.Message);
      } else {
        localStorage.setItem('id', response.data.id);
        localStorage.setItem('role', response.data.role);
        localStorage.setItem('token', response.data.token);
        toast.success("Login Successfully  ! ")

        setTimeout(() => {
          navigate('/');
        }, 1000);
       
      }
    } catch (error) {

      toast.error(error);
      setError(message);
  
    }
  };

 

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-zinc-900 backdrop:blur-2xl text-white py-10">
        <div>
          <form onSubmit={handleSubmit} className="py-2 px-10 bg-zinc-800 shadow-2xl rounded-lg h-auto mt-20">
            <h1 className="text-center font-semibold">Log In</h1>
           

            <label className="my-2 w-[300px] bg-zinc-800" htmlFor="username">
              Username:
            </label>
            <br />
            <input value={username} onChange={(e) => {setUsername(e.target.value);}} required className="my-2 w-[300px] focus:outline-none focus:border-yellow-400 bg-zinc-800 border border-zinc-600" type="text" name="username" placeholder="Username" />
            <br />

            <label className="my-2 w-[300px] bg-zinc-800" htmlFor="password">
              Password:
            </label>
            <br />
            <input value={password} onChange={(e) => {setPassword(e.target.value); }}  required className="my-2 w-[300px] focus:outline-none focus:border-yellow-400 bg-zinc-800 border border-zinc-600" type="password" name="password" placeholder="Password"/>
            <br />

            <div className="flex justify-center">
              <button className="bg-yellow-400 text-zinc-900 font-semibold py-2 px-8">
                LogIn
              </button>
            </div>
           
            <p className="text-center mt-2 text-gray-500">
              Don't have an account?{' '}
              <Link to="/signUp" className="text-white">
                SignUp
              </Link>
            </p>

           
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
