import React, { useEffect, useState } from 'react';
import DJIProduct from '../DJIProduct/DJIProduct';

const DJIProducts = () => {
    
        const [products, setProducts]= useState([])
        useEffect(()=>{
            fetch('http://localhost:5000/djiproducts')
            .then(rse => rse.json())
            .then(data => setProducts(data));
        },[])
    return (
        <div class="container mx-auto px-4">
            <section class="text-gray-600 body-font ">
            <div class="text-center my-10">
                <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Mavic Series</h1>
                <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Capture stunning imagery with a legendary Hasselblad camera and enjoy smooth flight with omnidirectional obstacle sensing. Every improvement on Mavic 3 sets a higher standard for aerial photography.</p>
                </div>
                <div className='item-container'>
            {
                    products.map(product => <DJIProduct
                    key={product._id}
                    product={product}
                    ></DJIProduct>)
                }
            </div>
            </section>
        </div>
    );
};

export default DJIProducts;