import React from 'react'
import Theme from './Theme'


const Header = () => {
  return (
    <div className='header max-w-md mt-9 mb-9 flex flex-row justify-between items-center mx-auto'>
        <h1 className='title text-4xl uppercase text-white font-semibold'>Todo</h1>
        <Theme />
    </div>
  )
}

export default Header