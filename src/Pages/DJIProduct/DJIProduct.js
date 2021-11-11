import React from 'react';

const DJIProduct = ({product}) => {
    const { _id, name, price, description, img } = product;
    return (
        <div>
            <div>
            <div class="container mx-auto px-4 filter drop-shadow-lg">
            <section class="text-gray-600 body-font ">
            {/* <div class="text-center my-10">
                <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Mavic Series</h1>
                <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Capture stunning imagery with a legendary Hasselblad camera and enjoy smooth flight with omnidirectional obstacle sensing. Every improvement on Mavic 3 sets a higher standard for aerial photography.</p>
                </div> */}
                <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center lg:px-10 filter drop-shadow-lg border-solid border-2 border-light-gray-500">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{name}</h1>
                    <p class="mb-8 leading-relaxed">{description}</p>
                    <div class="flex justify-center">
                        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Buy Now</button>
                        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Learn More</button>
                    </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img class="object-cover object-center rounded transform hover:scale-110 motion-reduce:transform-none" alt="hero" src={img}/>
                    </div>
                </div>
            </section>
            </div>
        </div>
        </div>
    );
};

export default DJIProduct;