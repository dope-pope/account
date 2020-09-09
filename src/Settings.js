import React, { Component } from 'react';
import { Drawer } from '@material-ui/core';
import { Form, Row, Col, FormLabel, FormGroup, FormControl, FormText, FormCheck } from 'react-bootstrap';
import { Button } from 'reactstrap';
import { useForm } from "react-hook-form";
import { List, ListItem, AppBar, Checkbox } from 'material-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Example.css';
import axios from 'axios';


class Settings extends Component {

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

                    <div className="container" style={{ marginLeft: '3em' }}>
                        <form>
                            <h2>Change Password</h2>
                            
                            <div className="row" style={{ marginBottom: '1em' }}>
                                <h3>New Password</h3>
                                <input type="text" placeholder="New Password" />
                            </div>
                            <div className="row ">
                                <h3>Old Password</h3>
                                <input type="text" placeholder="Old Password" />
                            </div>
                            <div className="row " style={{ marginBottom: '1em' }}>
                                <h3>Confirm Password</h3>
                                <input type="text" placeholder="Confirm Password" />
                            </div>
                            <Button variant="primary" type="submit">
                                Update
  </Button>
                        
                            <h2> Address</h2>
                            <div>
                                <h3>Area and Street</h3>
                                <div className="row">
                                    <Form.Control as="textarea" placeholder="Area and Street" rows="3" />
                                </div>

                                <h3>City</h3>
                                <div className="row" style={{ marginBottom: '2em' }}>
                                    <input type="text" placeholder="City" />
                                </div>

                                <h3>State</h3>
                                <Form.Group as={Col} controlId="formGridState">
                                  
                                    <Form.Control as="select" defaultValue="Choose...">
                                        <option>State</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>

                                <h3>Landmark</h3>
                                <div className="row" >
                                    <input type="text" placeholder="Landmark" />
                                </div>

                                <h3>City</h3>
                                <div className="row" style={{ marginBottom: '2em' }}>
                                    <input type="number" placeholder="Pincode" />
                                </div>

                                <Button variant="primary" type="submit">
                                    Update
  </Button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        );
    }


}

export default Settings;