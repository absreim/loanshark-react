import React from 'react';
import PropTypes from 'prop-types';

const LoansTable = ({ loans }) => {
  if (loans.length === 0) {
    return (
      <p>No loans of this type.</p>
    );
  }
  const columnNames = Object.keys(loans[0]);
  return (
    <table>
      <thead>
        <tr>
          {columnNames.map((columnName) => (
            <th key={columnName}>{columnName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {loans.map((loanObj) => (
          <tr key={loanObj.id}>
            {columnNames.map((columnName) => (
              <td key={`${loanObj.id},${columnName}`}>
                {loanObj[columnName]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

LoansTable.propTypes = {
  loans: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LoansTable;
