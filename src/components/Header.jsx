import { Heart } from 'lucide-react'
import React from 'react'

const Header = () => {
    return (
        <div className='w-full py-4 px-6 flex justify-between items-center'>
            <img src="RAYMOND.svg" alt="" className='h-7 ' />
            <Heart />
        </div>
    )
}

export default Header
