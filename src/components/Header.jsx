import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { like } from '../redux/features/wishlist.slice'
import { FaHeart, FaUtensils, FaGlobe } from 'react-icons/fa'

const Header = () => {
  const liked = useSelector((state) => state.wishlist.like)
  const [recipes, setRecipes] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes))
  }, [])

  return (
    <div className="p-6 bg-gray-50 container  mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-green-600 flex items-center gap-2">
          <FaUtensils /> All Recipes
        </h2>
        <div className="flex items-center gap-4">
          <span className="text-lg font-medium flex items-center gap-1 text-red-500">
            <FaHeart />
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((item) => (
          <div key={item.id} className="bg-white rounded-xl overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-1">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600 flex items-center text-sm">
                <FaGlobe className="mr-1" /> {item.cuisine}
              </p>
            
              <button
                onClick={() => dispatch(like(item))}
                className="mt-3 inline-flex items-center gap-2 bg-red-500 text-white px-3 py-1.5 rounded-md hover:bg-red-600 text-sm cursor-pointer"
              >
                <FaHeart /> Like
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Header
