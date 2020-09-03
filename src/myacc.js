import React, { Component } from 'react';
import { Drawer } from '@material-ui/core';
import { List, ListItem, AppBar } from 'material-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './Example.css';
import axios from 'axios';


class MyAcc extends Component {

    constructor(props, { match }) {
        super(props, { match });
        this.state = { drawerOpen: false, userId: " ", userName: " ", userAbout: " ", userChat: " " };
    }
    componentDidMount() {
        axios.get('http://localhost:8000/users')
            .then((user) => {
                var selectedUser = user.data[0];

                this.setState({
                    name: selectedUser.userName,
                    about: selectedUser.userAbout,
                    id: selectedUser.userId,
                    chat: selectedUser.userChat,
                });
            });
    }

    render() {
        const contentStyle = { transition: 'margin-left 450ms cubic-bezier(20, 1, 20, 1)' };

        if (this.state.drawerOpen) {
            contentStyle.marginLeft = 256;
        }

        return (

            <div className="col-12">

                <Drawer open={this.state.drawerOpen} style={{ marginTop: '2em' }}>
                    <h2 className="back" onClick={() => this.setState({ drawerOpen: false })} >My Account <FontAwesomeIcon icon={faArrowLeft} size="sm" />  </h2>

                    <div style={{ textAlign: 'left' }, { paddingRight: '5em' }}>



                        <h3 className="det">My Account</h3>
                        <h3 className="det">My Order</h3>
                        <h3 className="det">My Chat</h3>
                        <h3 className="det">My Settings</h3>
                        <h3 className="det">My Help</h3>
                    </div>
                    {this.props.children}
                </Drawer>

                <div style={contentStyle}>


                    <AppBar color="primary" onLeftIconButtonClick={() => this.setState({ drawerOpen: true })} >
                        <h2 className="pol"> Hello {this.state.name}</h2>
                    </AppBar>



                </div>
            </div>

        );
    }


}

export default MyAcc;