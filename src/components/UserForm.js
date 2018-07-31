import React, {Component} from 'react';


class UserFrom extends Component {


    state = {
        username: ''
    };

    render() {
        return (
            <div>
                Name: <input type="text" value={this.state.username} onChange={this.handleUserChange}/>
            </div>
        )
    }

    handleUserChange = (ev) => {
        console.log('changed');
        this.setState({
            username: ev.target.value
        })
    }
}

export default UserFrom