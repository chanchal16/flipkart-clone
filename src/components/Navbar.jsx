import React from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import {AiOutlineShoppingCart} from 'react-icons/ai'

export const Navbar = () => {
  return (
    <nav className='bg-blue-500'>
        <div className="app-container flex items-center md:justify-between p-3.5  text-lg">
            <div className='flex gap-6 w-3/4'>
                <p className="text-xl text-white hover:text-yellow-300">
                    Ecart
                </p>
                <input type='search' className='w-3/4' />
            </div>

        <div className="flex items-center flex-grow md:justify-end">
            <ul className="flex flex-grow md:flex-initial items-center justify-between md:gap-x-4 flex-wrap">
                
                <li>
                   <span className='flex items-center text-white'> More <IoIosArrowDown size='1.5rem' /></span>
            
                </li>              
                <li>
                    <span className="text-white link flex items-center" aria-label="Add post">
                        <AiOutlineShoppingCart size='1.5rem' />
                    </span>
                </li>            

                <li>                                     
                    <button
                    className="bg-white px-1.5 py-0.5 text-base rounded hover:text-yellow-300">
                        Login
                    </button>
                </li>
            </ul>
        </div> 
    </div>
    </nav>
  )
}
