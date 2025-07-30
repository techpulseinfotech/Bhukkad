import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FoodCard from './FoodCard';
import FoodCardShimer from './FoodCardShimer';
axios.defaults.baseURL = 'api.karauli.store';

function AllFoodItem() {
    const [FoodItems, setFoodItems] = useState([]);

    useEffect(() => {
        const getFoodItem = async () => {
            try {
                const response = await axios.get('/recently-added');
                setFoodItems(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        getFoodItem();
    }, []);


    const Shimmers = () => {
        const a = [];
        for (let i = 0; i < 8; i++) {
            a.push(
                <div >
                    <FoodCardShimer />
                </div>
            );
        }
        return a;
    };


    console.log(FoodItems)
    return (
        <div className=' p-10 bg-zinc-700'>
                 <div className='m-0 px-4  ' >
         <div className='my-8 grid md:grid-cols-4 gap-4 sm:grid-cols-3 grid-cols-1'>
               {
                FoodItems.length > 0 ? FoodItems.map((items,i)=>
                    <div key={i}>
                        <FoodCard data={items}></FoodCard>
                    </div>)

                    : Shimmers()
                

                }
                
               
               
             
            </div>
        </div>

        </div>
   
    );
}

export default AllFoodItem;
