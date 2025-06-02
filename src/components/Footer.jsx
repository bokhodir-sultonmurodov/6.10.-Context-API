import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  const liked = useSelector((state) => state.wishlist.like)

  return (
    <div className="p-6 bg-gray-100 mt-10 container mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-red-500 flex items-center gap-2">
          <FaHeart /> Liked Recipes
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {liked.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow p-3">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <h4 className="text-md font-semibold">{item.name}</h4>
            <p className="text-sm text-gray-500">{item.cuisine}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Footer
