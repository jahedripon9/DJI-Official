import React from 'react';
import DJIProducts from '../DJIProducts/DJIProducts';
import MavicPro from '../DJIProduct/MavicPro/MavicPro';
import MavicSeries from '../DJIProduct/MavicSeries/MavicSeries';
import ProductSupport from '../Shared/ProductSupport/ProductSupport';
import Banner from './Banner/Banner';
import Testimonials from './Testimonials/Testimonials';
import UserGallery from './UserGallery/UserGallery';
import DJIProductsAdd from '../DJIProductsAdd/DJIProductsAdd';
import DJIMovicMini from '../Shared/DJIMovicMini/DJIMovicMini';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          {/* <MavicSeries></MavicSeries>
          <MavicPro></MavicPro> */}
          <DJIMovicMini></DJIMovicMini>
          <DJIProducts></DJIProducts>
          <Testimonials></Testimonials>
          <DJIProductsAdd></DJIProductsAdd>
          <UserGallery></UserGallery>
          <ProductSupport></ProductSupport>
        </div>
    );
};

export default Home;