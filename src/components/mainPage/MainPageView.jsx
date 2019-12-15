import React, {Component} from 'react';
import Header from "../header/Header";
import {Button, Col, Container, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import LocalStorageUtils from "../../utils/LocalStorageUtils";
import addressLineVk from "../../img/stages/vkcom.svg"
import result from "../../img/stages/result.svg"
import analysis from "../../img/stages/analiz.svg"
import settings from "../../img/stages/search.svg"

class MainPageView extends Component {
    render() {

        return (
            <>
                <Header progress={true}/>
                <div className={'lead'}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={'py-3'}>
                                    <h1>Анализ активности пользователей ВКонтакте</h1>
                                    <p><strong>VK Analysis</strong> предназначен для того,
                                        чтобы узнать, кого "лайкает" пользователь больше всего.</p>
                                    <div className="text-center py-2">
                                        {this.renderButton()}
                                    </div>
                                </div>

                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2 className={"py-3"}>Как это работает?</h2>
                            </Col>
                        </Row>
                        <div className="py-5">
                            <Row>
                                <Col md={5}>
                                    <img src={addressLineVk} alt="address-line"/>
                                </Col>
                                <Col md={7}>
                                    <p>1. Вводим id пользователя из адресной строки.</p>
                                </Col>
                            </Row>
                        </div>
                        <div className="py-5">
                            <Row>
                                <Col md={7}>
                                    <p>2. Настраиваем количество первых постов
                                        и фотографий, которые будем проверять.</p>
                                </Col>
                                <Col md={5}>
                                    <img src={settings} alt="settings"/>
                                </Col>
                            </Row>
                        </div>
                        <div className="py-5">
                            <Row>
                                <Col md={5}>
                                    <img src={analysis} alt="analysing"/>
                                </Col>
                                <Col md={7}>
                                    <p>3. Производится анализ друзей введенного пользователя.</p>
                                </Col>
                            </Row>
                        </div>
                        <div className="py-5">
                            <Row>
                                <Col md={7}>
                                    <p>4. Profit! Теперь можете посмотреть, кого "лайкал" пользователь.</p>
                                </Col>
                                <Col md={5}>
                                    <img src={result} alt="result"/>
                                </Col>
                            </Row>
                        </div>

                    </Container>
                </div>
            </>
        );


    }

    renderButton = () => {
        if (LocalStorageUtils.getToken()) {
            return (<Button variant={"primary"} onClick={
                this.props.toAnalyse
            } size={"lg"}>Анализировать</Button>)
        }
        return (
            <OverlayTrigger
                placement={"bottom"}
                overlay={<Tooltip id="tooltip">{"Необходимо авторизироваться."}</Tooltip>}
            >
        <span className="d-inline-block">
          <Button
              style={{pointerEvents: "none"}}
              variant="primary"
              type="submit"
              disabled
              size={"lg"}
          >
            Анализировать
          </Button>
        </span>
            </OverlayTrigger>
        )
    }
}

export default MainPageView;