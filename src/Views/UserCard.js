import React from 'react';

function UserCard(props) {
    let { user } = props;

    return (<>
        <tbody>
            <tr>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
            </tr>
        </tbody>
    </>);
}
export default UserCard;