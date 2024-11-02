import React, { useState } from 'react'
import Navbar from '../../components/user/Navbar'
import Hero from '../../components/user/Hero'
import PropertySection from '../../components/user/PropertySection'
import Banner from '../../components/user/Banner'
import { properties } from '../../dummy-data/home-property'
import Property from '../../components/user/Property'
import Banner2 from '../../components/user/Banner2'
import Guide from '../../components/user/Guide'
import Banner3 from '../../components/user/Banner3'
import Discover from '../../assets/user/discover.png'
import Newsletter from '../../components/user/Newsletter'
import Footer from '../../components/user/Footer'

const Home = () => {
    const [displayCount, _ ] = useState(6);
  return (
    <>
      <Navbar />
      <Hero />
      <div className="py-16">
        <div className="mx-auto px-16">
          <div className='flex flex-col gap-12'>
            <div className='flex items-end justify-between'>
              <div className='flex flex-col gap-5'>
                <h1 className='text-header-600 text-4xl font-bold lg:max-w-[30vw] leading-[1.2]'>
                <span className="relative inline-block text-blue-600">
                    Latest
                    <svg className="absolute left-0 right-0 -bottom-2 w-full h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10">
                        <path fill="none" stroke="#0077B6" strokeWidth="4" d="M0,5 Q25,0 50,5 T100,5" />
                    </svg>
                </span> on the Property Listing</h1>
                <div className='h-1 w-32 bg-blue-600'/>
              </div>
              <div>
                {/* Arrows */}
              </div>
            </div>
            <PropertySection properties={properties.latest} />
          </div>
          <div className='flex flex-col gap-12'>
            <div className='flex items-end justify-between'>
              <div className='flex flex-col gap-5'>
                <h1 className='text-header-600 text-4xl font-bold max-w-72 leading-[1.2]'>
                <span className="relative inline-block text-blue-600">
                    Nearby
                    <svg className="absolute left-0 right-0 -bottom-2 w-full h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10">
                        <path fill="none" stroke="#0077B6" strokeWidth="4" d="M0,5 Q25,0 50,5 T100,5" />
                    </svg>
                </span> Listed Properties</h1>
                <div className='h-1 w-32 bg-blue-600'/>
              </div>
              <div>
                {/* Arrows */}
              </div>
            </div>
            <PropertySection properties={properties.nearby} />
          </div>
          <div className='flex flex-col gap-12'>
            <div className='flex items-end justify-between'>
              <div className='flex flex-col gap-5'>
                <h1 className='text-header-600 text-4xl font-bold max-w-72 leading-[1.2]'>
                <span className="relative inline-block text-blue-600">
                    Top
                    <svg className="absolute left-0 right-0 -bottom-2 w-full h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10">
                        <path fill="none" stroke="#0077B6" strokeWidth="4" d="M0,5 Q25,0 50,5 T100,5" />
                    </svg>
                </span> Rated Properties</h1>
                <div className='h-1 w-32 bg-blue-600'/>
              </div>
              <div>
                {/* Arrows */}
              </div>
            </div>
            <PropertySection properties={properties.topRated} />
          </div>
          <Banner />
          <div className='flex flex-col gap-12 mt-16'>
            <div className='flex items-end justify-between'>
              <div className='flex flex-col gap-5'>
                <h1 className='text-header-600 text-4xl font-bold max-w-[35vw] xl:max-w-[30vw] leading-[1.2]'>
                <span className="relative inline-block text-blue-600">
                    Featured
                    <svg className="absolute left-0 right-0 -bottom-2 w-full h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10">
                        <path fill="none" stroke="#0077B6" strokeWidth="4" d="M0,5 Q25,0 50,5 T100,5" />
                    </svg>
                </span> Properties on our Listing</h1>
                <div className='h-1 w-32 bg-blue-600'/>
              </div>
              <div>
                {/* Arrows */}
              </div>
            </div>
            <Property displayCount={displayCount}/>
            <Banner2 />
          </div>
          <div className='flex flex-col gap-12 mt-16'>
            <div className='flex items-end justify-between'>
              <div className='flex flex-col gap-9'>
                <h1 className='text-header-600 text-4xl font-bold max-w-[35vw] xl:max-w-[30vw] leading-[1.2]'>
                Property Rental
                <span className="relative inline-block text-blue-600">
                    Guides
                    <svg className="absolute left-0 right-0 -bottom-2 w-full h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10">
                        <path fill="none" stroke="#0077B6" strokeWidth="4" d="M0,5 Q25,0 50,5 T100,5" />
                    </svg>
                </span> &
                <span className="relative inline-block text-blue-600">
                    Tips
                    <svg className="absolute left-0 right-0 -bottom-2 w-full h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10">
                        <path fill="none" stroke="#0077B6" strokeWidth="4" d="M0,5 Q25,0 50,5 T100,5" />
                    </svg>
                </span>
                </h1>
                <div className='h-1 w-44 bg-blue-600'/>
              </div>
              <div>
                {/* Arrows */}
              </div>
            </div>
            <Guide />
            <Banner3 />
          </div>
          <div className='my-12 flex items-center justify-between gap-28'>
            <div className='flex flex-col gap-5 justify-center'>
              <div className='flex flex-col gap-5'>
                <h1 className='text-header-600 text-4xl font-bold max-w-[35vw] xl:max-w-[35vw] leading-[1.2]'>
                <span className="relative inline-block text-blue-600">
                    Discover
                    <svg className="absolute left-0 right-0 -bottom-2 w-full h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10">
                        <path fill="none" stroke="#0077B6" strokeWidth="4" d="M0,5 Q25,0 50,5 T100,5" />
                    </svg>
                </span> More About Property Rental
                </h1>
                <div className='h-1 w-44 bg-blue-600'/>
              </div>
              <p className='text-header-400'>Unlock the potential of your property with TravelTrekz. Whether you're a seasoned host or just starting out, we'll guide you through every step — from creating a standout listing to providing exceptional guest experiences. With our seamless tools and dedicated support, renting your space has never been easier or more rewarding.</p>
              <div className='text-header-600 text-lg font-semibold flex items-center gap-5'>
                <button>Ask A Question</button>
                <button>Find A Property</button>
              </div>
              <button className='text-lg font-semibold w-fit bg-blue-600 text-white px-4 py-2 rounded-full'>Discover More</button>
            </div>
            <div className="relative rounded-lg overflow-hidden h-full w-full">
              <img 
                  src={Discover} 
                  alt='discover'
                  className="w-[80%] h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 opacity-100 hover:opacity-0 w-[80%] rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </> 
  )
}

export default Home