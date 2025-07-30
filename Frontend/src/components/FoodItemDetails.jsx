import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
import FoodItemDtlShimer from './FoodItemDtlShimer';

axios.defaults.baseURL = 'https://api.karauli.store';


function FoodItemDetails() {

    const [FoodItems, setFoodItems] = useState([]);
    const [A, setA] = useState(false)
    let {id} = useParams();
  
    console.log(id)
      useEffect(() => {
          const getFoodItem = async () => {
              try {
                  const response = await axios.get(`/get-food-item-details/${id}`);
                  setFoodItems(response.data.data);
                  console.log("Response Data:", response.data);
              } catch (error) {
                  console.error("Error fetching food item details:", error);
              }
        
          
          };
  
          getFoodItem();
      }, []);
  
      console.log(FoodItems);

  return (
    <>


    {
      FoodItems.FoodName ? (<div className='h-[auto] bg-zinc-950 text-white w-full  lg:px-32 py-24 '>

      <div className='bg-zinc-900  rounded-3xl px-4 py-4  justify-center'>
        
    <Link to={'/'} className='float-end text-2xl bg-zinc-500 hover:bg-red-700  px-4 py-2 rounded-full'> 
  X
</Link>

<div className='bg-zinc-900 justify-center px-8 py-4 rounded-3xl gap-4 lg:h-[70vh] h-[auto] grid lg:grid-cols-2 grid-cols-1  '>


  <div className=' content-center lg:px-20 bg-zinc-800 rounded-xl'>

  <img src={`https://api.karauli.store/uploads/${FoodItems.FoodImage}`} alt="" className='w-[100%] h-[250px]'/>

  

  </div>

  <div className='content-center'>
 
    <h1 className='text-4xl text-red-600'>
      
      {FoodItems.FoodName}
      

    </h1>

    <h1 className='text-yellow-400'>
      {FoodItems.FoodCategory}
    </h1>

    <p className='text-gray-300'>
      {FoodItems.FoodDesc}
    </p>

    <p>
      <b>
        Ingredients :
      </b><br/>
        <span className='text-gray-500'> 
        {FoodItems.FoodIngredients}
        </span>
     
    </p>

<h1 className=' text-2xl font-bold'>
&#x20B9;  {FoodItems.FoodPrice}
</h1>

<div className='py-8 flex gap-2'>



<Link className="bg-yellow-400 text-black px-6 py-2">
Add to Cart 
</Link>



  <Link className="bg-yellow-400 text-black  px-6 py-2">
  Buy Now
  </Link>



</div>

  </div>

</div>
      
     </div>
   </div>) :(<FoodItemDtlShimer/>)
    }
   
    
 

    
    </>
  )
}


export default FoodItemDetails