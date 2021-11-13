import React from 'react';
import { Link } from 'react-router-dom';

const ProductSupport = () => {
    return (
        <div>
            <div className="container mx-auto">
                
            <section className="text-gray-600 body-font">
            <img src="https://i.ibb.co/y545MzJ/2x-Mavic-Support.png" alt="" />
            <div className="container mx-auto flex px-5 py-0 md:flex-row flex-col items-center ">
                <div className="lg:-mt-96 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mt-20 font-medium text-gray-900">Product Support
                </h1>
                <h5 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-gray-900">We are here for you.
                </h5>
                
                <div className="flex justify-center">
                    <Link to='/djiSupport'><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
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