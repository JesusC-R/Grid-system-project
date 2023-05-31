import React from "react";

// Images
import HouseImg1 from "../assets/img/house-1.jpeg";
import HouseImg2 from "../assets/img/house-2.jpeg";
import HouseImg3 from "../assets/img/house-3.jpeg";
import HouseImg4 from "../assets/img/house-4.jpeg";
import HouseImg5 from "../assets/img/house-5.jpeg";
import HouseImg6 from "../assets/img/house-6.jpeg";

// Icons 
import { AiFillHeart as HeartIcon } from "react-icons/ai";
import { FiMapPin as MapPinIcon } from "react-icons/fi";
import { MdOutlineBedroomParent as RoomIcon } from "react-icons/md";
import { BiArea as AreaIcon } from "react-icons/bi";
import { BsKey as KeyIcon } from "react-icons/bs";



const Homes = (props) => {
  return (
    <section className="homes">
      <div className="home">
        <img src={HouseImg1} alt="img" className="home__img" />
        <HeartIcon className="home__like" />
        <h5 className="home__name">Beautiful Family House</h5>
        <div className="home__location">
          <MapPinIcon />
          <p>USA</p>
        </div>
        <div className="home__rooms">
          <RoomIcon />
          <p>5 rooms</p>
        </div>
        <div className="home__area">
          <AreaIcon />
          <p>
            325 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <KeyIcon />
          <p>$1,200,000</p>
        </div>
				<button className="btn home__btn">Contact Realtor</button>
      </div>

      <div className="home">
        <img src={HouseImg2} alt="img" className="home__img" />
        <HeartIcon className="home__like" />
        <h5 className="home__name">Modern Glass Villa</h5>
        <div className="home__location">
          <MapPinIcon />
          <p>Canada</p>
        </div>
        <div className="home__rooms">
          <RoomIcon />
          <p>6 rooms</p>
        </div>
        <div className="home__area">
          <AreaIcon />
          <p>
            450 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <KeyIcon />
          <p>$2,750,000</p>
        </div>
				<button className="btn home__btn">Contact Realtor</button>
      </div>

      <div className="home">
        <img src={HouseImg3} alt="img" className="home__img" />
        <HeartIcon className="home__like" />
        <h5 className="home__name">Cozy Country House</h5>
        <div className="home__location">
          <MapPinIcon />
          <p>UK</p>
        </div>
        <div className="home__rooms">
          <RoomIcon />
          <p>4 rooms</p>
        </div>
        <div className="home__area">
          <AreaIcon />
          <p>
            350 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <KeyIcon />
          <p>$850,000</p>
        </div>
				<button className="btn home__btn">Contact Realtor</button>
      </div>

      <div className="home">
        <img src={HouseImg4} alt="img" className="home__img" />
        <HeartIcon className="home__like" />
        <h5 className="home__name">Large Rustical Villa</h5>
        <div className="home__location">
          <MapPinIcon />
          <p>Portugal</p>
        </div>
        <div className="home__rooms">
          <RoomIcon />
          <p>6 rooms</p>
        </div>
        <div className="home__area">
          <AreaIcon />
          <p>
            480 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <KeyIcon />
          <p>$1,950,000</p>
        </div>
				<button className="btn home__btn">Contact Realtor</button>
      </div>

      <div className="home">
        <img src={HouseImg5} alt="img" className="home__img" />
        <HeartIcon className="home__like" />
        <h5 className="home__name">Majestic Palace House</h5>
        <div className="home__location">
          <MapPinIcon />
          <p>Germany</p>
        </div>
        <div className="home__rooms">
          <RoomIcon />
          <p>18 rooms</p>
        </div>
        <div className="home__area">
          <AreaIcon />
          <p>
            4,200 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <KeyIcon />
          <p>$9,500,000</p>
        </div>
				<button className="btn home__btn">Contact Realtor</button>
      </div>

      <div className="home">
        <img src={HouseImg6} alt="img" className="home__img" />
        <HeartIcon className="home__like" />
        <h5 className="home__name">Modern Family Apartment</h5>
        <div className="home__location">
          <MapPinIcon />
          <p>Italy</p>
        </div>
        <div className="home__rooms">
          <RoomIcon />
          <p>3 rooms</p>
        </div>
        <div className="home__area">
          <AreaIcon />
          <p>
            180 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <KeyIcon />
          <p>$600,000</p>
        </div>
				<button className="btn home__btn">Contact Realtor</button>
      </div>
    </section>
  );
};

export default Homes;
