import React, {Component} from 'react';
import {Accordion, Button, Card} from "react-bootstrap";


class AnalyseResult extends Component {
    renderLikedUsers = () => {
        const {likedUsers} = this.props;
        return likedUsers.map(({user, likedPhotos, likedPosts}) => {
            const total = likedPosts.length + likedPhotos.length;
            return (
                <p>{user.firstName} {user.lastName}: {total} ♥</p>
            )
        })
    };

    render() {
        const {onDelete, user, date, likedUsers, index} = this.props;
        return (
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                        {user.firstName} {user.lastName}, {date.getDay()}/{date.getMonth() + 1}/{1900 + date.getYear()} {date.getHours()}:{date.getMinutes()}
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