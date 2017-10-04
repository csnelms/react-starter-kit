import React from 'react'

const SolicitationQueue = ({queue}) => {
  console.log(queue)
  return <ul>
    {
      queue.map(offer => <li key={offer.SOLICITATION_ID}>{offer.SOLICITATION_ID}</li>)
    }
  </ul>
}

export default SolicitationQueue
