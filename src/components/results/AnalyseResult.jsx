import React, {Component} from 'react';
import {Accordion, Button, Card, Col, Container, Row} from "react-bootstrap";


class AnalyseResult extends Component {
    renderLikedUsers = () => {
        const {likedUsers} = this.props;
        if (likedUsers.length === 0) {
            return (<p>Пользователь не проявлял активность в виде "лайков".</p>)
        }
        return likedUsers.map(({user, likedPhotos, likedPosts}) => {
            const total = likedPosts.length + likedPhotos.length;
            return (
                <p>{user.firstName} {user.lastName}: {total} <span className={'text-danger'}>&#9829;</span></p>
            )
        })
    };

    render() {
        const {user, date, index} = this.props;
        return (
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={index} className={'w-100 p-0'}>
                        <Container>
                            <Row>
                                <Col className={'pl-0'}>
                                    <p className={'text-left mb-1'} xs={6}>{user.firstName} {user.lastName}</p>
                                </Col>
                                <Col>
                                    <p className={'text-right mb-1'}
                                       xs={6}>{date.getDay()}/{date.getMonth() + 1}/{1900 + date.getYear()} {date.getHours()}:{date.getMinutes()}</p>
                                </Col>
                            </Row>
                        </Container>
                        {/*{user.firstName} {user.lastName}, {date.getDay()}/{date.getMonth() + 1}/{1900 + date.getYear()} {date.getHours()}:{date.getMinutes()}*/}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={index}>
                    <Card.Body>
                        {this.renderLikedUsers()}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    }
}

export default AnalyseResult;