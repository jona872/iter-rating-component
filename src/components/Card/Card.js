import React from 'react'
import l2 from '../../assets/images/icon-star.svg';

export default function Card(props) {
  console.log("card props");
  console.log(props);


  return (
    <>
      <div className="App--logo--container">
        <img src={l2} className="App--logo" alt="fav logo" />
      </div>

      <h1>How did we do?</h1>

      <span>
        Please let us know how we did with your support request. All feedback is appreciated
        to help us improve our offering!
      </span>

      <div className="card--qualification">
        {props.qualifications}
      </div>

      <button className="card--button" onClick={props.onSubmit} >
        SUBMIT
      </button>
    </>
  )
}
