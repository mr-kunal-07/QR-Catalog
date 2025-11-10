"use client"
import React, { useState } from 'react'
import Title from './Title'

const Tags = () => {
    const categories = [
        { id: 1, name: 'Suit', image: './suit.avif' },
        { id: 2, name: 'Kurtas', image: './Kurtas.jpg' },
        { id: 3, name: 'Shirts', image: '/shirt.jpg' },
        { id: 4, name: 'Bottom wear', image: '/pant.jpg' },
        { id: 5, name: 'Lehengas', image: './Lehengas.avif' },
    ]

    const [selectedTag, setSelectedTag] = useState(1)

    return (
        <div className='w-full py-6'>
            <div
                className='overflow-x-auto px-4'
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch'
                }}
            >
                <style>{`
                    .overflow-x-auto::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
                <div className='flex gap-4 pb-2' style={{ width: 'max-content' }}>
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            onClick={() => setSelectedTag(category.id)}
                            className={`
                                group flex flex-col gap-1 items-center 
                                border-2 p-2 rounded-lg shrink-0
                                cursor-pointer transition-all duration-500 ease-out
                                hover:shadow-lg hover:-translate-y-1
                                ${selectedTag === category.id
                                    ? 'border-red-300 shadow-md'
                                    : 'border-gray-200 bg-white hover:border-red-300'
                                }
                            `}
                        >
                            <div className='relative w-20 h-20 rounded-lg overflow-hidden'>
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className={`
                                        w-full h-full object-cover transition-all duration-500
                                        ${selectedTag === category.id
                                            ? 'scale-110 brightness-105'
                                            : 'group-hover:scale-110'
                                        }
                                    `}
                                />
                            </div>
                            <p className={`
                                text-sm font-medium text-center transition-all duration-500
                                ${selectedTag === category.id
                                    ? 'text-red-300 scale-105'
                                    : 'text-gray-700 group-hover:text-red-300'
                                }
                            `}>
                                {category.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <Title title={categories.find((category) => category.id === selectedTag)?.name} />
        </div>
    )
}

export default Tags