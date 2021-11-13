import React from 'react';
import DJIProducts from '../DJIProducts/DJIProducts';
import MavicPro from '../DJIProduct/MavicPro/MavicPro';
import MavicSeries from '../DJIProduct/MavicSeries/MavicSeries';
import ProductSupport from '../Shared/ProductSupport/ProductSupport';
import Banner from './Banner/Banner';

import UserGallery from './UserGallery/UserGallery';
import DJIMovicMini from '../Shared/DJIMovicMini/DJIMovicMini';
import Header from '../Shared/Header/Header';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
          <Header></Header>
          <Banner></Banner>
          {/* <MavicSeries></MavicSeries> */}
          <DJIMovicMini></DJIMovicMini>
          <DJIProducts></DJIProducts>
          <MavicPro></MavicPro>
          <Testimonials></Testimonials>
          <UserGallery></UserGallery>
          <ProductSupport></ProductSupport>
        </div>
    );
};

export default Home;