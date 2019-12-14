import React, {Component} from 'react';
import {Button, Container, Navbar} from "react-bootstrap";
import logo from "../../img/logo/vk.png";
import LocalStorageUtils from "../../utils/LocalStorageUtils";
import getUrl from "../../utils/LocationUtils";
import {Redirect} from "react-router-dom";

class Header extends Component {
    state = {
        logOut: false,
    };

    renderLogInfo = () => {
        if (LocalStorageUtils.getToken()) {
            return (
                <Button variant="danger" size="sm" onClick={this.onLogOut}>Выйти</Button>
            )
        }
        const url = 'https://oauth.vk.com/authorize' +
            '?client_id=7184308' +
            '&display=popup' +
            '&response_type=token' +
            '&v=5.102' +
            '&scope=friends,photos,offline' +
            '&redirect_uri=' + getUrl() + '/logIn';

        return <Button variant="primary" className={"float-right"} size="sm" href={url}>Войти через ВКонтакте</Button>
    };

    onLogOut = () => {
        LocalStorageUtils.clearToken();
        this.setState({
            logOut: true
        });
    };


    render() {
        if (this.state.logOut) {
            return (<Redirect to={'/'}/>)
        }
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt="vk-logo"
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        <span className={"ml-2"}>Analysis</span>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {this.renderLogInfo()}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;