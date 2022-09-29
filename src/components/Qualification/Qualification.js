import React from 'react'
import './Qualification.css';

export default function Qualification(props) {
  const styles = {
    backgroundColor: props.holded ? "hsl(217, 12%, 63%)" : "#1B222C"
  }

  return (
    <div className="card--qualification--value"
      holded={props.holded.toString()}
      onClick={props.handleClick}
      style={styles}>

      {props.value}

    </div>
  )
}
