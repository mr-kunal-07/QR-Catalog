import React from 'react'

const Title = ({ title }) => {
    return (
        <div className="flex items-center justify-center pt-4">
            <div className="flex items-center w-full max-w-md px-4">
                <div className="grow h-0.5 bg-linear-to-r from-transparent to-black" />
                <h2 className="mx-4 text-md font-semibold uppercase whitespace-nowrap text-black">
                    {title}
                </h2>
                <div className="grow h-0.5 bg-linear-to-r from-black to-transparent" />
            </div>
        </div>
    )
}

export default Title
