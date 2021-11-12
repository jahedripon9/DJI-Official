import React, { useEffect, useState } from 'react';
import DJIProducts from '../DJIProducts/DJIProducts';


const ExploreProduct = () => {
    const [products, setProducts]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/djiproducts')
        .then(rse => rse.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div class="container mx-auto px-4">
  
                {
                    products.map(product => <DJIProducts
                    key={product.id}
                    product={product}
                    ></DJIProducts>)
                }

        </div>
    );
};

export default ExploreProduct;