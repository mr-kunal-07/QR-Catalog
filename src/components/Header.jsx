import { Bookmark } from 'lucide-react'
import React from 'react'

const Header = () => {
    return (
        <div className='w-full py-4 px-6 flex justify-between items-center'>
            <div className='flex gap-2 items-center' >
                <img src="/RR.svg" alt="" className='h-9 ' />
                <img src="RAYMOND.svg" alt="" className='h-10 ' />
            </div>
            <div className=''>
                <Bookmark />
            </div>
        </div>
    )
}

export default Header
