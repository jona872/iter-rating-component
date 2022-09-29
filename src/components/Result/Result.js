import React from 'react'
import successLogo from '../../assets/images/illustration-thank-you.svg';

export default function Result(props) {
  return (
    <div>

      <img src={successLogo} alt="Logo sucess" />

      <div>You selected {props.value} out of 5</div>


      <h1>Thank you!</h1>
      <span>
        We appreciate you taking the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!
      </span>

    </div>

  )
}
