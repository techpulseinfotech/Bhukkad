import React, { useState, useEffect } from 'react';
import Hero from '../components/hero';
import axios from 'axios';
import FoodCard from '../components/FoodCard';
import FoodCardShimer from '../components/FoodCardShimer';
axios.defaults.baseURL = 'api.karauli.store';


function Categories() {
  const [FoodItems, setFoodItems] = useState([]);
  const [FilterData, setFilterData] = useState([]);

  useEffect(() => {
    const getFoodItem = async () => {
      try {
        const response = await axios.get("/get-food-item");
        setFoodItems(response.data.data);
        setFilterData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    getFoodItem();
  }, []);

  async function handleClick(item) {
    try {
      if (item === "All") {
        setFilterData(FoodItems);
      } else {
        setFilterData(FoodItems.filter(d => d.FoodCategory === item));
      }
    } catch (error) {
      console.error(error);
    }
  }

  const CategoryItem = ["All", "Pizza", "Burger", "Cold-Coffee", "French-Fries", "Sweets"];


  const Shimmers = () => {
    const a = [];
    for (let i = 0; i < 8; i++) {
        a.push(
            <div key={i} >
                <FoodCardShimer />
            </div>
        );
    }
    return a;
};

console.log(FilterData>0)

  return (
    <>
      <div className='h-auto bg-zinc-700'>
              

              <div className='h-[100vh] bg-zinc-700'>
              <Hero title="Categories" ></Hero>
              
              <div className='lg:flex  lg:pt-20 grid grid-cols-2 sm:grid-cols-3 xs:grid-cols-2 gap-4 lg:px-0 px-6 justify-center pt-10 py-4 lg:text-2xl'>
                {
                  CategoryItem.map((item, i) => (
                    <button
                      key={i}
                      className='bg-yellow-400 text-lg font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-500 hover:scale-105 transform transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2'
                      onClick={() => handleClick(item)}
                    >
                      {item}
                    </button>
                  ))
                }
              </div>

              
              </div>
             
            
       
              {
                FilterData.length>0 ?(
                  <div className=' '>
                <div className='m-0 px-4'>
                  <div className='my-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {FilterData.map((items, i) => (
                      <div key={i}>
                        <FoodCard data={items} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
                ) : <div className='grid lg:grid-cols-4 gap-10 pt-10 lg:pt-0  px-14 w-full md:grid-cols-1'>{ Shimmers() }</div>
              }

              
      </div>

      
    </>
  );
}

export default Categories