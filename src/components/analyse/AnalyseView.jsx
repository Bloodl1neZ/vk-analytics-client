import React, {Component} from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  OverlayTrigger,
  Row,
  Tooltip,
} from 'react-bootstrap';
import Header from '../header/Header';

class AnalyseView extends Component {
  renderForm = () => {
    const {
      settings,
      userId,
      onPostsChange,
      onPhotosChange,
      onUserIdChange,
      errors
    } = this.props;
    return (
        <div className={'py-4'}>
          <Form>
            <Form.Group>
              <Form.Label column={"id"}>Id пользователя</Form.Label>
              <Form.Control
                  name="id"
                  value={userId}
                  onChange={onUserIdChange}
                  isInvalid={errors.userId}
              />
              <Form.Control.Feedback type="invalid">
                {"Id пользователя - положительное число"}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label column={"photos"}>Количество фотографий</Form.Label>
              <Form.Control
                  name="photos"
                  value={settings.photos}
                  onChange={onPhotosChange}
                  isInvalid={errors.photos}
              />
              <Form.Control.Feedback type="invalid">
                {
                  "Количество фотографий не должно превышать 50 и должно быть положительным"
                }
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label column={"posts"}>Количество постов</Form.Label>
              <Form.Control
                  name="posts"
                  value={settings.posts}
                  onChange={onPostsChange}
                  isInvalid={errors.posts}
              />
              <Form.Control.Feedback type="invalid">
                {
                  "Количество постов не должно превышать 50 и должно быть положительным"
                }
              </Form.Control.Feedback>
            </Form.Group>
            {this.renderAnalyseButton()}
          </Form>
        </div>
    );
  };

  renderAnalyseButton = () => {
    const {onAnalyse} = this.props;
    if (!this.hasAnyError()) {
      return (
          <Button
              variant="primary"
              type="submit"
              onClick={onAnalyse}
          >
            Анализировать
          </Button>
      );
    }

    return (
        <OverlayTrigger
            placement={"bottom"}
            overlay={<Tooltip id="tooltip">{this.generateErrorTooltip()}</Tooltip>}
        >
        <span className="d-inline-block">
          <Button
              style={{pointerEvents: "none"}}
              variant="primary"
              type="submit"
              disabled
          >
            Анализировать
          </Button>
        </span>
        </OverlayTrigger>
    );
  };

  generateErrorTooltip = () => {
    const {errors} = this.props;
    const {
      analysing,
      posts,
      photos,
      settings,
      userFriends,
      user,
      userId
    } = errors;
    if (settings || posts || photos || userId) {
      return "Неверные настройки анализа";
    }
    if (userFriends) {
      return "У введенного пользователя нет друзей";
    }
    if (user) {
      return "Пользователь не найден";
    }
    if (analysing) {
      return "На данный момент уже производится анализ";
    }
  };

  hasAnyError = () => {
    const {errors} = this.props;
    return Object.values(errors).includes(true);
  };

  render() {
    return (
        <>
          <Header progress={true}/>
          <Container>
            <Row>
              <Col md={4}>{this.renderForm()}</Col>
              <Col md={8}>
                <Container>
                  <div className={'py-5'}>
                    <Row>
                      {this.renderUser()}
                    </Row>
                  </div>
                </Container>
              </Col>
            </Row>
          </Container>
        </>
    );
  }

  renderUser = () => {
    const {user, estimation, errors} = this.props;
    if (!user) {
      return;
    }
    const {friends, first_name, last_name, photo_400} = user;
    if (errors.userId) {
      return;
    }
    if (errors.user) {
      return (
          <p>Пользователь не найден или ограничил доступ к своей странице.</p>
      );
    }
    return (
        <>
          <Col xs={4}>
            <img
                src={photo_400}
                alt="user"
                width={"100%"}
                className={"rounded-lg"}
            />
          </Col>
          <Col xs={8}>
            <p>
              {first_name} {last_name}
            </p>
            <p>Друзья: {Number.isInteger(friends) ? friends : "..."}</p>
            <p>
              Предположительное время анализа: {Number.isInteger(estimation) ? estimation : "..."}{" "}
              мин.
            </p>
          </Col>
        </>
    );
  };
}

export default AnalyseView;
