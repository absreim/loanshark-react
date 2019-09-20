import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import LoansTable from './loans-table';

const ALL_LOANS = gql`
  fragment PendingLoanFields on Loan {
    id,
    lender,
    borrower,
    description,
    imageName,
    value,
    lendDate,
    promisedDate,
    returnDate,
  }

  fragment OutstandingLoanFields on Loan {
    ...PendingLoanFields,
    acceptedDate,
  }

  fragment CompletedLoanFields on Loan {
    ...OutstandingLoanFields,
    returnDate,
  }

  query getAllLoans {
    pendingBorrowingLoans {
      ...PendingLoanFields,
    }
    pendingLendingLoans {
      ...PendingLoanFields,
    }
    outstandingBorrowingLoans {
      ...OutstandingLoanFields,
    }
    outstandingLendingLoans{
      ...OutstandingLoanFields,
    }
    completedBorrowingLoans{
      ...CompletedLoanFields,
    }
    completedLendingLoans{
      ...CompletedLoanFields,
    }
  }
`;

export default function () {
  return (
    <Query query={ALL_LOANS}>
      {(data) => {
        if (data) {
          const {
            pendingBorrowingLoans, pendingLendingLoans,
            outstandingBorrowingLoans, outstandingLendingLoans,
            completedBorrowingLoans, completedLendingLoans,
          } = data;
          return (
            <div>
              <h1>Your Loans</h1>
              <h2>Pending Loans Waiting for Your Acceptance</h2>
              <LoansTable loans={pendingBorrowingLoans} />
              <h2>Pending Loans That You Proposed to Others</h2>
              <LoansTable loans={pendingLendingLoans} />
              <h2>Outstanding Loans for which You are the Borrower</h2>
              <LoansTable loans={outstandingBorrowingLoans} />
              <h2>Outstanding Loans for which You are the Lender</h2>
              <LoansTable loans={outstandingLendingLoans} />
              <h2>Completed Loans for which You Returned the Item</h2>
              <LoansTable loans={completedBorrowingLoans} />
              <h2>Completed Loans for which the Item was Returned to You</h2>
              <LoansTable loans={completedLendingLoans} />
            </div>
          );
        }
        return (
          <div>No data available.</div>
        );
      }}
    </Query>
  );
}
