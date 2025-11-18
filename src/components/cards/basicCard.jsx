'use client';

import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const ProductGrid = ({ products = [] }) => {
    const defaultProducts = [
        {
            id: 1,
            image: 'https://myraymond.com/cdn/shop/files/RMDX02322-K8-2.jpg?v=1729163989',
            title: 'Men Black Blend Suit',
            description: 'Raymond Men Black Structure Contemporary Fit Polyester Blend Suit',
            price: 'Rs.10,534',
            link: '/'
        },
        {
            id: 2,
            image: 'https://myraymond.com/cdn/shop/files/RIDH00808-R4-2.jpg?v=1725601288',
            title: 'Men Red Blend Suit',
            description: 'Raymond Men Red Structured Regular Fit Polyester Blend Suit',
            price: 'Rs.20,016',
            link: '/'
        },
        {
            id: 3,
            image: 'https://myraymond.com/cdn/shop/files/RMDX02366-G8-2.jpg?v=1744822850',
            title: 'Men Grey Solid Suit',
            description: 'Raymond Men Grey Solid Contemporary Fit Polyester Blend Suit',
            price: 'Rs.12,999',
            link: '/'
        }
    ];

    const items = products.length > 0 ? products : defaultProducts;
    const [favorites, setFavorites] = useState({});

    const toggleFavorite = (id, e) => {
        e.preventDefault();
        e.stopPropagation();
        setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
    };

    if (items.length === 0) return null;

    return (
        <div className="w-full max-w-6xl mx-auto p-4 pt-0">
            <div className="grid grid-cols-2 gap-3">
                {items.map((item) => (
                    <a
                        key={item.id}
                        href={item.link}
                        className="group bg-white rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                    >
                        {/* Image Container */}
                        <div className="relative aspect-3/4 overflow-hidden bg-gray-50">
                            <img
                                src={item.image}
                                alt={item.description || item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-4">
                            <div className="flex justify-between items-start">
                                <span className="text-xl font-bold text-gray-900">
                                    {item.price}
                                </span>
                                <button
                                    onClick={(e) => toggleFavorite(item.id, e)}
                                    className={`p-2 pt-0 rounded-full transition-colors ${favorites[item.id]
                                        ? 'text-red-500'
                                        : 'text-gray-400 '
                                        }`}
                                    aria-label={favorites[item.id] ? 'Remove from favorites' : 'Add to favorites'}
                                >
                                    <Heart
                                        size={26}
                                        fill={favorites[item.id] ? 'currentColor' : 'none'}
                                    />
                                </button>
                            </div>
                            <h3 className="text-sm font-medium text-gray-700 line-clamp-2">
                                {item.title}
                            </h3>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;