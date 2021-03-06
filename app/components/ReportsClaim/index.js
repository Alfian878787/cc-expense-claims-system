import React from 'react';
import PropTypes from 'prop-types';
import ClaimPage from '../../containers/ClaimPage';
import { Link } from 'react-router-dom';
import { claimsHelpers } from  '../../helpers';

const ReportsClaim = ({ employee, claim, routedFrom }) => {
  const { id, first_name, last_name, email } = employee
  const {
    claim_id,
    claimant_first_name,
    claimant_last_name,
    approver_first_name,
    approver_last_name,
    company_name,
    cost_centre_id,
    description,
    account_number,
    notes,
    status,
    date_created,
    total_amount,
    manager_first_name,
    manager_last_name,
    manager_email
  } = claim;

  return (
    <div className="claim-container">
      { routedFrom == 'approvals' && <div className="claim-description"><Link to={`/approvals/${claim_id}`}>{description}</Link></div>}
      { routedFrom == 'admin' && <div className="claim-description"><Link to={`/admin/reports/${claim_id}`}>{description}</Link></div>}     
      <div><small className="claim-date">{claimsHelpers.toDateString(date_created)}</small></div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Status</th>
            <th scope="col">Claimant</th>
            <th scope="col">Manager</th>
            <th scope="col">Approver</th>
            <th scope="col">Cost Centre</th>
            <th scope="col">Total (CAD)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{width: 185 + 'px'}}>{claimsHelpers.getStatusText(status)}</td>
            <td style={{width: 185 + 'px'}}>{claimant_first_name + " " + claimant_last_name}</td>
            <td style={{width: 185 + 'px'}}>{manager_first_name + " " + manager_last_name}</td>
            <td style={{width: 185 + 'px'}}>{approver_first_name + " " + approver_last_name}</td>
            <td style={{width: 185 + 'px'}}>{cost_centre_id}</td>
            <td style={{width: 185 + 'px'}}>{"$" + total_amount.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</td>
          </tr>
        </tbody>
      </table>
      { claim.notes && <i className="ion-android-alert"> Approver Notes: {claim.notes}</i>}
    </div>
  );
}

ReportsClaim.propTypes = {
  claim: PropTypes.shape({
    claim_id: PropTypes.number.isRequired,
    claimant_first_name: PropTypes.string.isRequired,
    claimant_last_name: PropTypes.string.isRequired,
    approver_first_name: PropTypes.string,
    approver_last_name: PropTypes.string,
    manager_first_name: PropTypes.string,
    manager_last_name: PropTypes.string,
    company_name: PropTypes.string.isRequired,
    cost_centre_id: PropTypes.number.isRequired,
    description: PropTypes.string,
    notes: PropTypes.string,
    account_number: PropTypes.string,
    status: PropTypes.string.isRequired,
    date_created: PropTypes.string.isRequired,
  }).isRequired,
  employee: PropTypes.shape({
    id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string,
    email: PropTypes.string
  }).isRequired
}

export default ReportsClaim;