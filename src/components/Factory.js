import Car from "./Car";
import { useState } from "react";

const Factory = () => {
    const [colour, setColour] = useState("deepskyblue");
    function displayColour(e) {
        const inputcolour = e.target.value;
        setColour(inputcolour);
    }
    return (
        <>
            <input type="text" placeholder="change car colour" onChange={displayColour} ></input>
            <Car colourProp={colour}></Car>
        </>
    );
};

export default Factory;