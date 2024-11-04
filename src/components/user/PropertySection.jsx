import React, { useState } from 'react';
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const PropertySection = ({ properties }) => {
    const [favorites, setFavorites] = useState({});

    const toggleFavorite = (id) => {
        setFavorites(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="mb-8">        
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
                {properties.map(property => (
                    <div key={property.id}>
                        <div className="relative rounded-lg overflow-hidden">
                            <img 
                                src={property.image} 
                                alt={property.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 opacity-100 hover:opacity-0"></div>
                            <div 
                                className={`absolute top-2 right-2 cursor-pointer text-3xl text-blue-400 ${favorites[property.id] ? 'text-blue-400' : ''} p-2 rounded-full`}
                                onClick={() => toggleFavorite(property.id)}
                            >
                                {favorites[property.id] ? <MdFavorite /> : <MdFavoriteBorder className='text-white'/>}
                            </div>
                            <div className="absolute bottom-0 left-0 p-4">
                                <h3 className="text-white font-medium text-lg">{property.title}</h3>
                                <p className="text-white/80 text-sm">{property.location}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PropertySection;