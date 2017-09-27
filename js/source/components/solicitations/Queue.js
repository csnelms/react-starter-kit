import React from 'react';

class Queue extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <table className="table table-striped table-condensed">
                    <thead>
                        <tr>
                            <th>Row</th>
                            <th>Offer</th>
                            <th>CME</th>
                            <th>Office</th>
                            <th>Vendor</th>
                            <th>Name</th>
                            <th>Dist</th>
                            <th>Interval</th>
                            <th>Remaining</th>
                            <th>Status</th>
                            <th>Offer Type</th>
                            <th>Resolicit Dt</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.offers.map((offer, i) =>
                        <tr key={offer.SOLICITATION_ID}>
                            <td>{i}</td>
                            <td>{offer.SOLICITATION_ID}</td>
                            <td>{offer.IS_CME}</td>
                            <td><a href={this.props.config.baseURL+'broker/office_edit.cfm?cid='+offer.COMPANY_ID+'&oid='+offer.OFFICE_ID+'&lcontactid='+offer.VENDOR_ID} target="_blank">{offer.OFFICE_ID}</a></td>
                            <td><a href={this.props.config.baseURL+'broker/profile.cfm?lcontactid='+offer.VENDOR_ID} target="_blank">{offer.VENDOR_ID}</a></td>
                            <td>{offer.FIRST_NAME} {offer.LAST_NAME}</td>
                            <td>{offer.DIST}</td>
                            <td></td>
                            <td>{offer.DELAY}</td>
                            <td>{offer.STATUS_NAME}</td>
                            <td>{offer.SOLICITATION_TYPE_CODE}</td>
                            <td>{offer.AUTO_RESOLICIT_DTS}</td>
                            <td>{offer.PERFORMANCE_SCORE}</td>
                         </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default Queue;