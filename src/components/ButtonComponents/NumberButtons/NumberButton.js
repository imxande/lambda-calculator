import React from "react";
import "../../../App.css"



const NumberButton = (props) => {
  function handleClickEvent(){
    props.console.log(props.number)
  }

  return (
    <button className= "number_button" onClick={()=> props.setDisplayValue(props.value)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.number}
    </button>
  );
};

export default NumberButton;