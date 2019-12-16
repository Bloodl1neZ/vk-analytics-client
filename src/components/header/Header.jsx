import React, {Component} from 'react';
import {Button, Container, Navbar} from "react-bootstrap";
import logo from "../../img/logo/vk.png";
import LocalStorageUtils from "../../utils/LocalStorageUtils";
import getUrl from "../../utils/LocationUtils";
import {Redirect} from "react-router-dom";
import AnalysisService from "../../service/AnalysisService";

class Header extends Component {
    state = {
        logOut: false,
        progress: false,
        processing: false,
        results: false,
    };

    componentDidMount() {
        AnalysisService.getCurrentProgress()
            .then(() => {
                this.setState({
                    processing: true,
                })
            }).catch(() => {
        });
    }

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

    onResults = () => {
        this.setState({
            results: true,
        })
    };

    onLogOut = () => {
        LocalStorageUtils.clearToken();
        this.setState({
            logOut: true
        });
    };

    onProgress = () => {
        this.setState({
            progress: true
        });
    };


    render() {
        if (this.state.progress && this.props.progress) {
            return (<Redirect to={'/progress'}/>)
        }
        return (

            <Navbar bg="dark" variant="dark" expand={"lg"}>
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt="vk-logo"
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        <span className={"mx-2"}>Analysis</span>


                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {this.renderResults()}
                            {this.renderSpinner()}
                            {this.renderLogInfo()}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }

    renderSpinner = () => {
        if (this.state.processing && this.props.progress) {
            return (
                <span className={"mx-2"}><Button onClick={this.onProgress} variant="primary" size="sm"
                                                 href={'/progress'}>Текущий
                анализ</Button>
                </span>);
        }
    };

    renderResults = () => {
        if (LocalStorageUtils.getToken()) {
            return (
                <span className={"mx-2"}>
            <Button onClick={this.onResults} variant={"primary"} size={"sm"} href={"/results"}>Результаты
                анализов</Button>
            </span>);
        }
    }
}

export default Header;