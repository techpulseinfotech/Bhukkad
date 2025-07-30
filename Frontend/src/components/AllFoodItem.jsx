import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FoodCard from './FoodCard';
import FoodCardShimer from './FoodCardShimer';

// Ensure correct API URL (add https:// if missing)
axios.defaults.baseURL = 'https://api.karauli.store';

function AllFoodItem() {
    const [FoodItems, setFoodItems] = useState([]);

    useEffect(() => {
        const getFoodItem = async () => {
            try {
                const response = await axios.get('/recently-added');
                const items = response?.data?.data;
                console.log("API response:", items);
                setFoodItems(Array.isArray(items) ? items : []);
            } catch (error) {
                console.error("API fetch error:", error);
                setFoodItems([]); // fallback to empty array
            }
        };

        getFoodItem();
    }, []);

    const Shimmers = () => {
        const a = [];
        for (let i = 0; i < 8; i++) {
            a.push(
                <div key={i}>
                    <FoodCardShimer />
                </div>
            );
        }
        return a;
    };

    return (
        <div className='p-10 bg-zinc-700'>
            <div className='m-0 px-4'>
                <div className='my-8 grid md:grid-cols-4 gap-4 sm:grid-cols-3 grid-cols-1'>
                    {Array.isArray(FoodItems) && FoodItems.length > 0
                        ? FoodItems.map((item, i) => (
                              <div key={item._id || i}>
                                  <FoodCard data={item} />
                              </div>
                          ))
                        : Shimmers()}
                </div>
            </div>
        </div>
    );
}

export default AllFoodItem;
