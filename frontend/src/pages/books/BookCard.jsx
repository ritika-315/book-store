import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { getImgUrl } from '../../utils/getImgUrl'

import { Link } from'react-router-dom'

import { useDispatch } from'react-redux'
import { addToCart } from '../../redux/features/cart/cartSlice'

const BookCard = ({book}) => {
    const dispatch =  useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }
    return (
        <div className=" rounded-lg transition-shadow duration-300">
            <div
                className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4"
            >
                <div className="bg-white h-52 w-full">
                    <Link to={`/books/${book._id}`}>
                        <img
                            src={`${getImgUrl(book?.coverImage)}`}
                            alt=""
                            className="w-full h-full object-cover rounded-md cursor-pointer"
                        />
                    </Link>
                </div>

                <div className='flex flex-col flex-grow'>
                    <Link to={`/books/${book._id}`}>
                        <h3 className="text-lg font-semibold hover:text-blue-600 mb-2 line-clamp-2">
                       {book?.title}
                        </h3>
                    </Link>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{book?.description.length > 80 ? `${book.description.slice(0, 80)}...` : book?.description}</p>
                    <p className="font-medium mb-3">
                        ${book?.newPrice} <span className="line-through font-normal ml-2 text-gray-500">$ {book?.oldPrice}</span>
                    </p>
                    <button 
                    onClick={() => handleAddToCart(book)}
                    className="btn-primary px-6 space-x-1 flex items-center gap-1 ">
                        <FiShoppingCart className="" />
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BookCard