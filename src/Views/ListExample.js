import React, {Component} from 'react';
import UserCard from './UserCard';

class ListExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            users: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState({ users: json, loading: false }));
    }

  render() {
        let { users, loading } = this.state;
        return (<>
            <h1> This is List Example! </h1>
            {loading? <h3>Loading...</h3>:
                <>
                    {users.length > 0 && <table className="table table-hovered table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        {users.map((user, i) => (
                            <UserCard user={user} key={i} />
                        ))}
                    </table>}
                </>}
        </>)
    }
}

export default ListExample;