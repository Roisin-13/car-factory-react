import '../App.css';
import { useState } from 'react';

const Car = ({colourProp}) => {
 return (
    <>
       <div className="car" style={{ backgroundColor: colourProp }}></div>
       <div className="car_carBody" style={{ backgroundColor: colourProp }}></div>
       <div className="car_wheel_front"></div>
       <div className="car_wheel_back"></div>
    </>
 );
}
export default Car;