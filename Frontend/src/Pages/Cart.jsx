import React from 'react';
import { FiShoppingCart, FiX, FiPlus, FiMinus } from 'react-icons/fi';

const Cart = () => {
  // Static cart data
  const cartItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      FoodCategory: "Pizza",
      price: 12.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Cheeseburger",
      FoodCategory: "Burger",
      price: 8.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Iced Coffee",
      FoodCategory: "Cold-Coffee",
      price: 4.50,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 2.99;
  const total = subtotal + deliveryFee;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full flex flex-col">
        {/* Cart Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center">
            <FiShoppingCart className="text-yellow-500 text-2xl mr-2" />
            <h2 className="text-xl font-bold">Your Order</h2>
            <span className="ml-2 bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
              {cartItems.length}
            </span>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <FiX className="text-2xl" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-start border-b pb-4">
                <div className="flex">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="ml-4">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-500 text-sm">{item.FoodCategory}</p>
                    <p className="text-yellow-500 font-bold mt-1">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <button className="text-gray-400 hover:text-red-500 mb-2">
                    <FiX />
                  </button>
                  <div className="flex items-center border rounded-full">
                    <button className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-l-full">
                      <FiMinus size={14} />
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-r-full">
                      <FiPlus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Footer */}
        <div className="border-t p-4">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-bold">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Delivery Fee</span>
            <span className="font-bold">${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold mb-6">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-yellow-500 text-white py-3 rounded-full font-bold hover:bg-yellow-600 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;