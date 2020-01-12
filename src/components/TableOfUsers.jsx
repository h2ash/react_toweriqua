import React from 'react';
import User from './User';

const TableOfUsers = ({ users, currentPage }) => {
  const firstIndexPhoneOnCurrentPage = currentPage === 1 
    ? 1 
    : ((currentPage - 1) * 5) + 1;
  const lastPossibleIndexPhoneOnCurPage = currentPage * 5;

  return (
    <table className="table">
      <tr>
        <th>id</th>
        <th>name</th>
        <th>surname</th>
      </tr>
      {
        users
          .filter(user => user.id >= firstIndexPhoneOnCurrentPage
            && user.id <= lastPossibleIndexPhoneOnCurPage)
          .map(user => (
            <User
              user={user}
              key={user.id}
            />
          ))
      }
    </table>
  );
};

export default TableOfUsers;
