import React, {Component} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

class AnalyseView extends Component {

    renderForm = () => {
        const {settings, userId, onPostsChange, onPhotosChange, onUserIdChange, errors, onAnalyse} = this.props;
        return (
            <Form>
                <Form.Group>
                    <Form.Label column={"id"}>Id пользователя</Form.Label>
                    <Form.Control
                        type="number"
                        name="id"
                        value={userId}
                        onChange={onUserIdChange}
                        isInvalid={errors.userId}
                        // isValid={!errors.userId}
                    />
                    <Form.Control.Feedback type="invalid">
                        {'Id пользователя - положительное число'}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label column={"photos"}>Количество фотографий</Form.Label>
                    <Form.Control
                        type="number"
                        name="photos"
                        value={settings.photos}
                        onChange={onPhotosChange}
                        isInvalid={errors.photos}
                        // isValid={!errors.photos}
                    />
                    <Form.Control.Feedback type="invalid">
                        {'Количество фотографий не должно превышать 50 и должно быть положительным'}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label column={"posts"}>Количество постов</Form.Label>
                    <Form.Control
                        type="number"
                        name="posts"
                        value={settings.posts}
                        onChange={onPostsChange}
                        isInvalid={errors.posts}
                        // isValid={!errors.posts}
                    />
                    <Form.Control.Feedback type="invalid">
                        {'Количество постов не должно превышать 50 и должно быть положительным'}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit" disabled={this.hasAnyError()} onClick={onAnalyse}>
                    Анализировать
                </Button>
            </Form>
        );
    };

    hasAnyError = () => {
        const {errors} = this.props;
        return Object.values(errors).includes(true);
    };

    render() {
        return (
            <div className={'lead'}>
                <Container>
                    <Row>
                        <div className={'text-center m-auto px-3 py-4'}>
                            <h2 className={'display-4'}>Анализ активности пользователя</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur
                                culpa
                                ipsa, odio qui
                                tempore. Aspernatur dolore exercitationem, expedita facere illo pariatur praesentium
                                quod
                                recusandae?</p>
                        </div>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            {this.renderForm()}
                        </Col>
                        <Col lg={8}>
                            <Container>
                                <Row>
                                    {this.renderUser()}
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

    renderUser = () => {
        const {user, estimation, errors} = this.props;
        const {friends, first_name, last_name, photo_400} = user;
        if (errors.userId) {
            return;
        }
        if (errors.user) {
            return (
                <p>Пользователь не найден или ограничил доступ к своей странице.</p>
            )
        }
        return (
            <>
                <Col sm={4}>
                    <img src={photo_400 || 'http://cs319323.vk.me/v319323049/70e1/2gddfIt0mvc.jpg'} alt="user-photo"
                         width={'100%'} className={'rounded-lg'}/>
                </Col>
                <Col sm={8}>
                    <p>{first_name} {last_name}</p>
                    <p>Друзья: {Number.isInteger(friends) ? friends : '...'}</p>
                    <p>Время анализа: {Number.isInteger(estimation) ? estimation : '...'} минут</p>
                </Col>
            </>
        )
    };
}

export default AnalyseView;