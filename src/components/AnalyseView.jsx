import React, {Component} from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";

class AnalyseView extends Component {

    renderForm = () => {
        const {settings, onPostsChange, onPhotosChange, user, onUserIdChange} = this.props;
        return (
            <Form>
                <Form.Group>
                    <Form.Label column={"id"}>Id пользователя</Form.Label>
                    <Form.Control
                        type="number"
                        name="id"
                        value={user ? user.id : ""}
                        onChange={onUserIdChange}
                        isValid={user ? user.id >= 0 : false}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label column={"photos"}>Количество фотографий</Form.Label>
                    <Form.Control
                        type="number"
                        name="photos"
                        value={settings.photos}
                        onChange={onPhotosChange}
                        isValid={settings.photos >= 0 && settings.photos <= 50}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label column={"posts"}>Количество постов</Form.Label>
                    <Form.Control
                        type="number"
                        name="posts"
                        value={settings.posts}
                        onChange={onPostsChange}
                        isValid={settings.posts >= 0 && settings.posts <= 50}
                    />
                </Form.Group>
            </Form>
        );
    };

    render() {
        return (
            <Container>
                <Row>
                    {this.renderForm()}
                </Row>
                <Row>
                    {this.renderUser()}
                </Row>
            </Container>
        );
    }

    renderUser = () => {
        const {user, estimation} = this.props;
        const {friends, first_name, last_name, photo_400} = user;
        if (!user || !user.first_name) {
            return (
                <p>Loading...</p>
            )
        }
        if (user.error) {
            return (
                <p>{user.error}</p>
            )
        }
        return (
            <div>
                <Col>
                    <img src={photo_400 || 'http://cs319323.vk.me/v319323049/70e1/2gddfIt0mvc.jpg'} alt="user-photo" width={'200px'}/>
                </Col>
                <Col>
                    <p>{first_name} {last_name}</p>
                    <p>Друзья: {Number.isInteger(friends) ? friends : '...'}</p>
                    <p>Время анализа: {Number.isInteger(estimation) ? estimation : '...'} мин.</p>
                </Col>
            </div>
        )
    };
}

export default AnalyseView;