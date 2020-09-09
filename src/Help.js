import React, { Component } from 'react';
import { Drawer } from '@material-ui/core';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem, AppBar } from 'material-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Example.css';
import axios from 'axios';


class Help extends Component {

    constructor(props, { match }) {
        super(props, { match });
        this.state = { drawerOpen: false, userId: " ", userName: " ", userAbout: " ", userChat: " ", userOrder: " " };
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


                        <Link to={`/user/MyAccount`} className="l" style={{ textDecoration: 'none' }}><h3 className="det">My Account</h3>
                        </Link>

                        <Link to={`/user/MyOrder`} className="l" style={{ textDecoration: 'none' }}><h3 className="det">My Order</h3>
                        </Link>

                        <Link to={`/user/MyChat`} className="l" style={{ textDecoration: 'none' }}><h3 className="det">My Chats</h3>
                        </Link>

                        <Link to={`/user/Settings`} className="l" style={{ textDecoration: 'none' }}><h3 className="det">Settings</h3>
                        </Link>

                        <Link to={`/user/Help`} className="l" style={{ textDecoration: 'none' }}><h3 className="det">Help</h3>
                        </Link>
                    </div>
                    {this.props.children}
                </Drawer>

                <div style={contentStyle}>


                    <AppBar className="bar" style={{ backgroundColor: '#FFD662FF ' }} onLeftIconButtonClick={() => this.setState({ drawerOpen: true })} >
                        <h2 className="pol"> Hello {this.state.name}</h2>
                    </AppBar>
                    <div className="col-12 col-md-6" style={{ marginLeft:'3em' }}>
                       
                        <h2>Order Related</h2>
                        <div>
                            <h3>Want to know About Your Order Status ?</h3>
                            <p>Go to Orders, and click on Track Order. </p>

                            <h3>Want to Cancel Your Order ?</h3>
                            <p>As this is a customization website, the item should be cancelled within 48 hours of ordering, before the designer starts the work. To cancel order,
Go to Orders, and click on Cancel Order.</p>

                            <h3>Want to Know About any Payment Issue Or Payment Deducted from account without booking Order?</h3>
                            <p>Do not Worry,we will take care of it in case the amount is debited from your account it will be refunded within 5-6 working days.</p>

                            <h3>Want to Talk with Customer Care?</h3>
                            <p>Customer care No:020-12345678</p>
                               
                        </div>
                        <h2>Non-Order Related</h2>
                        <div>
                            <h3>Want to know about offers and discounts ?</h3>

                            <h3>Manage Your Account?</h3>

                            <h3>payments/Refund</h3>

                            <h3>Others</h3>

                        </div>

                           
                    </div>



                </div>
            </div>
        );
    }


}

export default Help;