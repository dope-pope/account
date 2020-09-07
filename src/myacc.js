import React, { Component } from 'react';
import { Drawer } from '@material-ui/core';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem, AppBar } from 'material-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Example.css';
import axios from 'axios';


class MyAcc extends Component {

    constructor(props, { match }) {
        super(props, { match } );
        this.state = { drawerOpen: false ,userId:" ", userName: " " , userAbout:" " , userChat: " ",userOrder: " "};
    }
    componentDidMount() {
        axios.get('http://localhost:8000/users')
            .then((res) => {
                var selectedUser = res.data[0];

                this.setState({
                    name: selectedUser.userName,
                    about: selectedUser.userAbout,
                    id: selectedUser.userId,
                    chat: selectedUser.userChat,
                    userOrder: selectedUser.userOrder
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


                        <Link to={`/user/${this.state.id}/MyAccount`} className="l"><h3 className="det">My Account</h3>
                        </Link>
                 
                        <Link to={`/user/${this.state.id}/MyOrder`} className="l"><h3 className="det">My Order</h3>
                        </Link>

                        <Link to={`/user/${this.state.id}/MyChat`} className="l"><h3 className="det">My Chats</h3>
                        </Link>

                        <Link to={`/user/${this.state.id}/Settings`} className="l"><h3 className="det">Settings</h3>
                        </Link>

                        <Link to={`/user/${this.state.id}/Help`} className="l"><h3 className="det">Help</h3>
                        </Link>
                        </div>
                        {this.props.children}
                    </Drawer>
                    
                <div style={contentStyle}>


                    <AppBar color="primary" onLeftIconButtonClick={() => this.setState({ drawerOpen: true })} >
                        <h2 className="pol"> Hello {this.state.name}</h2>
                    </AppBar>
                    <div>
                        {this.state.userAbout}
                    </div>
                        

                    </div>
                </div>

        );
    }


}

export default MyAcc;