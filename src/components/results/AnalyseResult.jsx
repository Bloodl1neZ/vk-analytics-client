import React, {Component} from 'react';
import {Accordion, Button, Card, Col, Container, Row} from 'react-bootstrap';
import ResultContainer from './ResultContainer';

class AnalyseResult extends Component {
    formatDate = date => date.toLocaleDateString('ru');

    render() {
        const {user, date, id, likedUsers} = this.props;
        return (
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={id}
                                      className={'w-100 p-0'}>
                        <Container>
                            <Row>
                                <Col className={'pl-0'}>
                                    <p className={'text-left mb-1'} xs={6}>{user.firstName} {user.lastName}</p>
                                </Col>
                                <Col>
                                    <p className={'text-right mb-1'}
                                       xs={6}>{this.formatDate(date)}</p>
                                </Col>
                            </Row>
                        </Container>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={id}>
                    <Card.Body>
                        <ResultContainer users={likedUsers} id={id}/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    }
}

export default AnalyseResult;