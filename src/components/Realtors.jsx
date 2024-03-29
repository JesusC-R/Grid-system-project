import React from "react";

// Images 
import Realtor1 from "../assets/img/realtor-1.jpeg";
import Realtor2 from "../assets/img/realtor-2.jpeg";
import Realtor3 from "../assets/img/realtor-3.jpeg";

const Realtors = (props) => {
	return (
    <div className="realtors">
      <h3 className="heading-3">Top 3 realtors</h3>
      <div className="realtors__list">
        
        <img src={Realtor1} alt="Realtor 1" className="realtors__img" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Erik Fingman</h4>
          <p className="realtors__sold">245 houses sold</p>
        </div>

        <img src={Realtor2} alt="Realtor 2" className="realtors__img" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Kim Brown</h4>
          <p className="realtors__sold">219 houses sold</p>
        </div>

        <img src={Realtor3} alt="Realtor 3" className="realtors__img" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">John Ramsey</h4>
          <p className="realtors__sold">198 houses sold</p>
        </div>

      </div>
    </div>
  );
}

export default Realtors;