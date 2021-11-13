import React from 'react';
import { Link } from 'react-router-dom';

const MavicPro = () => {
    return (
        <div>
            <div className="container mx-auto px-4 filter drop-shadow-lg">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 lg:mx-auto  sm:motion-safe:hover:animate-spin">
                    <div className="flex flex-wrap -mx-4 -mb-10 text-center ">
                    <div className="sm:w-1/2 mb-10 px-4 drop-shadow-sm filter border-solid border-2 border-light-gray-500 py-10">
                        <div className="rounded-lg h-64 overflow-hidden">
                        <img alt="content" className="object-cover object-center h-full w-full transform hover:scale-110 motion-reduce:transform-none " src="https://i.ibb.co/BtHhdzG/1180x640-pc.jpg"/>
                        </div>
                        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">MavicPRO Platinum</h2>
                        <p className="leading-relaxed text-base">30-minute Max Flight Time | 4 dB Noise Reduction | 4k Camera | 12 MP Photos</p>
                        <Link to='/exploreproduct'><button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded transform hover:scale-110 motion-reduce:transform-none">Learn More</button></Link>
                    </div>
                    <div className="sm:w-1/2 mb-10 px-4 drop-shadow-sm filter border-solid border-2 border-light-gray-500 py-10">
                        <div className="rounded-lg h-64 overflow-hidden">
                        <img alt="content" className="object-cover object-center h-full w-full transform hover:scale-110 motion-reduce:transform-none " src="https://i.ibb.co/5YGbdZf/488-256-2x.jpg"/>
                        </div>
                        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">MAVIC PRO</h2>
                        <p className="leading-relaxed text-base">4K Camera | 12 MP Photos | 7 km Range | 65 kph Max Speed</p>
                        <Link to='/exploreproduct'><button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded transform hover:scale-110 motion-reduce:transform-none">Learn More</button></Link>
                    </div>
                    </div>
                </div>
            </section>
            </div>
        </div>
    );
};

export default MavicPro;