import '../App.css';
import { useState } from 'react';

const Car = () => {
   const [colour, setColour] = useState("deepskyblue");
   function displayColour(e) {
      const inputcolour = e.target.value;
      setColour(inputcolour);
   }

 return (
    <>
       <input type="text" placeholder="change car colour" onChange={displayColour} ></input>
       <div className="car" style={{ backgroundColor: colour }}></div>
       <div className="car_carBody" style={{ backgroundColor: colour }}></div>
       <div className="car_wheel_front"></div>
       <div className="car_wheel_back"></div>
    </>
 );
}
export default Car;