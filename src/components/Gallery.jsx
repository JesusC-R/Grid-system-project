import React from "react";

// Images
import Gallery1 from "../assets/img/gal-1.jpeg";
import Gallery2 from "../assets/img/gal-2.jpeg";
import Gallery3 from "../assets/img/gal-3.jpeg";
import Gallery4 from "../assets/img/gal-4.jpeg";
import Gallery5 from "../assets/img/gal-5.jpeg";
import Gallery6 from "../assets/img/gal-6.jpeg";
import Gallery7 from "../assets/img/gal-7.jpeg";
import Gallery8 from "../assets/img/gal-8.jpeg";
import Gallery9 from "../assets/img/gal-9.jpeg";
import Gallery10 from "../assets/img/gal-10.jpeg";
import Gallery11 from "../assets/img/gal-11.jpeg";
import Gallery12 from "../assets/img/gal-12.jpeg";
import Gallery13 from "../assets/img/gal-13.jpeg";
import Gallery14 from "../assets/img/gal-14.jpeg";

const Gallery = (props) => {
  return (
    <section className="gallery">
      <figure className="gallery__item gallery__item-1">
        <img src={Gallery1} alt="img" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item-2">
        <img src={Gallery2} alt="img" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item-3">
        <img src={Gallery3} alt="img" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item-4">
        <img src={Gallery4} alt="img" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item-5">
        <img src={Gallery5} alt="img" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item-6">
        <img src={Gallery6} alt="img" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item-7">
        <img src={Gallery7} alt="img" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item-8">
        <img src={Gallery8} alt="img" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item-9">
        <img src={Gallery9} alt="img" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item-10">
        <img src={Gallery10} alt="img" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item-11">
        <img src={Gallery11} alt="img" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item-12">
        <img src={Gallery12} alt="img" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item-13">
        <img src={Gallery13} alt="img" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item-14">
        <img src={Gallery14} alt="img" className="gallery__img" />
      </figure>
    </section>
  );
};

export default Gallery;
