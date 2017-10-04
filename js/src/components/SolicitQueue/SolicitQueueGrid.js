import React from 'react'
import PropTypes from 'prop-types'

const SolicitQueueGrid = ({queue}) => {
  console.log(queue)
  return (
    <table className='table table-striped table-condensed'>
      <thead>
        <tr>
          <th>Row</th>
          <th>SID</th>
          <th>OID</th>
          <th>VID</th>
          <th>Name</th>
          <th>Dist</th>
          <th>Delay</th>
          <th>Status</th>
          <th>Type</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {
          queue.map((offer, i) => {
            return (
              <tr key={offer.SOLICITATION_ID}>
                <td>{i + 1}</td>
                <td>{offer.SOLICITATION_ID}</td>
                <td>{offer.OFFICE_ID}</td>
                <td>{offer.VENDOR_ID}</td>
                <td>{offer.FIRST_NAME + ' ' + offer.LAST_NAME}</td>
                <td>{offer.DIST}</td>
                <td>{offer.DELAY}</td>
                <td>{offer.STATUS + ' ' + offer.STATUS_NAME}</td>
                <td>{offer.SOLICITATION_TYPE_CODE}</td>
                <td>{offer.PERFORMANCE_SCORE}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

SolicitQueueGrid.propTypes = {
  queue: PropTypes.array.isRequired
}

export default SolicitQueueGrid
