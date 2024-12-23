import React from 'react'
import Hero from "../../assets/host/herohost.png"
import { Link } from 'react-router-dom';

const HeroHost: React.FC = () => {
  return (
    <div className="lg:h-[90vh] max-[340px]:h-[90vh] max-sm:h-[75vh] md:h-[60vh] flex items-center w-screen">
      <img src={Hero} className="bg-cover bg-center relative w-full h-full" />
      <div className="absolute max-[340px]:mt-16 flex flex-col gap-8 md:gap-12 text-white md:px-12 px-4 md:w-[890px] max-md:text-center max-md:items-center">
        <div className="flex flex-col gap-2">
            <h1 className='text-4xl lg:text-5xl font-bold'>Try Hosting With Us</h1>
            <p className="md:text-lg">Become a TravelTrekz host and turn your property into a thriving rental. Start earning today with our simple, stress-free process.</p>
        </div>
        <Link to='/register' className='bg-blue-600 py-2 px-4 rounded-full w-fit hover:scale-105 transition ease-linear duration-300 hover:border-2 hover:border-blue-600 hover:text-blue-600 hover:bg-white hover:font-semibold'>Let's Get Started</Link>
      </div>
    </div>
  );
};

export default HeroHost