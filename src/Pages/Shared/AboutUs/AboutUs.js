import React from 'react';
import Header from '../Header/Header';

const AboutUs = () => {
    return (
        <div className="container mx-auto px-4">
            <Header></Header>
                <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
                    <img className="lg:w-4/5 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://i.ibb.co/8dGZyMt/dji-about-7a03e69fe26a0cd9f9d9bd6b1b0ef333.jpg"/>
                    <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">The Future of Possible</h1>
                    <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
                    
                    </div>
                </div>
                </section>
        </div>
    );
};

export default AboutUs;