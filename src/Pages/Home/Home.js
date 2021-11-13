import React from 'react';
import DJIProducts from '../DJIProducts/DJIProducts';
import MavicPro from '../DJIProduct/MavicPro/MavicPro';
import MavicSeries from '../DJIProduct/MavicSeries/MavicSeries';
import ProductSupport from '../Shared/ProductSupport/ProductSupport';
import Banner from './Banner/Banner';

import UserGallery from './UserGallery/UserGallery';
import DJIProductsAdd from '../DJIProductsAdd/DJIProductsAdd';
import DJIMovicMini from '../Shared/DJIMovicMini/DJIMovicMini';
import Header from '../Shared/Header/Header';
import Review from '../Review/Review';
import Testimonial from './Testimonial/Testimonial';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
          <Header></Header>
          <Banner></Banner>
          {/* <MavicSeries></MavicSeries>
          <MavicPro></MavicPro> */}
          <DJIMovicMini></DJIMovicMini>
          <DJIProducts></DJIProducts>
          <Testimonials></Testimonials>
          {/* <Review></Review> */}
          {/* <DJIProductsAdd></DJIProductsAdd> */}
          <UserGallery></UserGallery>
          <ProductSupport></ProductSupport>
        </div>
    );
};

export default Home;