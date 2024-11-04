import React from 'react'
import { IoSearch } from "react-icons/io5";
import Hero1 from '../../assets/user/hero.png'

const Hero = () => {
    return(
        <div className="h-[90vh] flex items-center justify-center w-screen">
            <img src={Hero1} className='bg-cover bg-center relative w-full h-full' />
            <div className="absolute w-full flex-col justify-center">
                <div className="text-white text-center flex flex-col gap-2">
                    <h1 className="text-5xl font-bold lg:px-32 xl:px-48">
                        Luxury, Comfort, and Convenience - All in One Place
                    </h1>
                    <p className="text-xl lg:px-28 xl:px-44">
                        At TravelTrekz, we offer a curated selection of premium hotels and rooms tailored to your 
                        every need, ensuring a seamless and unforgettable travel experience from start to finish.
                    </p>
                </div>
                <div className='flex flex-col w-fit justify-center mx-auto mt-20'>
                    <div className="flex gap-4 flex-start">
                        <div className="text-white text-4xl font-bold mb-4">FIND</div>
                        <button className="text-white font-semibold focus:underline">Rooms</button>
                        <button className="text-white font-semibold focus:underline">Flats</button>
                        <button className="text-white font-semibold focus:underline">Hostels</button>
                        <button className="text-white font-semibold focus:underline">Villas</button>
                    </div>
                    <div className="bg-white rounded-full p-2 pr-2 pl-8 text-sm">
                            <div className="flex items-center gap-4">
                            <div className="flex flex-col">
                                <label className="text-gray-600 mb-1">Location</label>
                                <input 
                                    type="text" 
                                    placeholder="Where are you going?"
                                    className="border-r pr-4 outline-none"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-600 mb-1">Check In</label>
                                <input 
                                    type="date" 
                                    className="outline-none text-header-400 border-r pr-4"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-600 mb-1 ">Check Out</label>
                                <input 
                                    type="date" 
                                    className="outline-none text-header-400 border-r pr-4"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-600 mb-1">Guests</label>
                                <input 
                                    type="number" 
                                    placeholder="2 Adults"
                                    className="outline-none"
                                />
                            </div>
                            <IoSearch className="w-12 h-12 bg-blue-600 text-white p-2 rounded-full transition cursor-pointer" />
                        </div>
                    </div>                
                
                </div>
            </div>
        </div>
    )
}

export default Hero