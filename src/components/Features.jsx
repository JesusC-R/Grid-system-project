import React from "react";

// Icons
import { TfiWorld as WorldIcon } from "react-icons/tfi";
import { FiMapPin as MapPinIcon } from "react-icons/fi";
import { BsTrophy as TrophyIcon } from "react-icons/bs";
import { BsKey as KeyIcon } from "react-icons/bs";
import { HiOutlinePresentationChartLine as ChartIcon } from  "react-icons/hi"
import { BiLockOpen as LockIcon } from "react-icons/bi";

const Features = (props) => {
	return (
    <section className="features-section">
      <div className="feature">
        <WorldIcon className="feature__icon" />
        <h1 className="heading-4 heading-4--dark">World's best luxury homes</h1>
        <p className="feature__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus.
        </p>
      </div>
      <div className="feature">
				<TrophyIcon className="feature__icon"/>
        <h1 className="heading-4 heading-4--dark">Only the best properties</h1>
        <p className="feature__text">
          Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
          rerum sed a eligendi aut quia.
        </p>
      </div>
      <div className="feature">
        <MapPinIcon className="feature__icon" />
        <h1 className="heading-4 heading-4--dark">All homes in top locations</h1>
        <p className="feature__text">
          Tenetur distinctio necessitatibus pariatur voluptatibus quidem
          consequatur harum.
        </p>
      </div>
      <div className="feature">
				<KeyIcon className="feature__icon"/>
        <h1 className="heading-4 heading-4--dark">New home in one week</h1>
        <p className="feature__text">
          Tenetur distinctio necessitatibus pariatur voluptatibus quidem
          consequatur harum.
        </p>
      </div>
      <div className="feature">
				<ChartIcon className="feature__icon"/>
        <h1 className="heading-4 heading-4--dark">Top 1% realtors</h1>
        <p className="feature__text">
          Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio
          necessitatibus pariatur voluptatibus.
        </p>
      </div>
      <div className="feature">
				<LockIcon className="feature__icon"/>
        <h1 className="heading-4 heading-4--dark">Secure payments on Nexter</h1>
        <p className="feature__text">
          LPariatur voluptatibus quidem consequatur harum, voluptatum mollitia
          quae.
        </p>
      </div>
    </section>
  );
}

export default Features;