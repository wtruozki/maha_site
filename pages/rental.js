import Layout from "../components/Layout";
import OtherWrap from "../components/OtherWrap";
import Image from "next/image";
import Slider from "react-slick";

import RentalContent from "../components/RentalContent";

const Rental = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 300,
    speed: 5000,
    slidesToShow: 1,
    swipe: false,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  };
  return (
    <Layout title="RENTAL">
      <OtherWrap heading="RENTAL HALL">
        <Slider {...settings}>
          <Image src="/cake.png" alt="cake" width={1618} height={1000} />
          <Image src="/drinks.png" alt="drinks" width={1618} height={1000} />
          <Image src="/glass.png" alt="glass" width={1618} height={1000} />
        </Slider>
        <RentalContent />
      </OtherWrap>
    </Layout>
  );
};

export default Rental;
