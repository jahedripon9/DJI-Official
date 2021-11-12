import React from 'react';
import { Link } from 'react-router-dom';

const ProductSupport = () => {
    return (
        <div>
            <div class="container mx-auto">
                
            <section class="text-gray-600 body-font">
            <img src="https://i.ibb.co/y545MzJ/2x-Mavic-Support.png" alt="" />
            <div class="container mx-auto flex px-5 py-0 md:flex-row flex-col items-center ">
                <div class="lg:-mt-96 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mt-20 font-medium text-gray-900">Product Support
                </h1>
                <h5 class="title-font sm:text-2xl text-3xl mb-4 font-medium text-gray-900">We are here for you.
                </h5>
                
                <div class="flex justify-center">
                    <Link to='/djiSupport'><button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg> 
                    </button></Link>
                    
                    
                </div>
                </div>
            </div>
            </section>
            </div>
        </div>
    );
};

export default ProductSupport;