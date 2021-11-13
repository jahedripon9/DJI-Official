import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import Header from '../Shared/Header/Header';
import './VerifyProduct.css'

const VerifyProduct = () => {
    const { verifyId } = useParams();
  const [product, setProduct] = useState({})
  const email = sessionStorage.getItem("email");
  // const email = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/djiproducts/${verifyId}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      
  }, []);
  


  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {

    data.email = email;

    fetch("http://localhost:5000/confirmOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
    
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
    alert('Thank you for your purchase from DJI Official')        
  };
    return (
        <div className="container mx-auto px-4">
          <Header></Header>
                <div className="bg-yellow-200  container px-auto py-24 mx-auto  ">
                <div className="col-md-6">
                    <div className="">
                    <img className="w-52 mx-auto" src={product.img} alt="" />
                    </div>
                    <h1 className="text-danger font-bold">Name:{product.name}</h1>
                    <h1 className="text-danger font-bold">Price:${product.price}</h1>
                    <h1 className="text-danger font-bold">Description:{product.description}</h1>
                </div>
                <div className="col-md-6 verify-product bg-blue-100 bg-opacity-50 ">
                    <h2 className="text-red-500 text-3xl font-bold">Place Order Information</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className='text-2xl  text-center mb-28'>
                    <input {...register("name", { required: true, maxLength: 20 })}
                        defaultValue={product.name}
                        placeholder="Product Name"  className='text-left'/>
                    <input {...register("Customer Name")}
                        // defaultValue={product.name}
                        placeholder="Customer Name" className='text-left '/>

                    <input {...register("email")}
                    defaultValue={product.email}
                        placeholder="Email" className='text-left '/>

                    <input {...register("price",)}
                        defaultValue={product.price}
                        placeholder="price" className='text-left '/>

                    <input {...register("image")}
                        defaultValue={product.img}
                        placeholder="image" />
                    <input {...register("description",)}
                        defaultValue={product.description}
                        placeholder="Description" className='text-left '/>
                    <input className='bg-green-400 rounded-xl hover:bg-green-600 text-white ' type="submit" />
                    
                    <br />

                    </form>
                </div>
                </div>      
        </div>
    );
};

export default VerifyProduct;