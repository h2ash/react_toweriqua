import React from 'react';

const User = ({ user, key }) => {
  return (
    <tr key={key}>
      <th className='table__th-person-id' scope='row'>{user.id}</th>
      <td className='table__td-person-name'>{user.name}</td>
      <td>{user.surname}</td>
    </tr>
  )
}

export default User;