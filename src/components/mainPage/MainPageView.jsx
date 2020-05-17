import React, {Component} from 'react';
import Header from '../header/Header';
import {Button, Col, OverlayTrigger, Row, Tooltip} from 'react-bootstrap';
import LocalStorageUtils from '../../utils/LocalStorageUtils';
import addressLineVk from '../../img/stages/link_new.png';
import result from '../../img/stages/result_new.png';
import analysis from '../../img/stages/analys_new.png';
import settings from '../../img/stages/search_new.png';
import users from '../../img/mainPage/main_page_users.png';

class MainPageView extends Component {
    render() {

        return (
            <>
                <Header progress={true}/>
                <div>
                    <div className={'container-fluid bg-primary p-0'}>
                        <div className={'container'}>
                            <div className={'row py-5'}>
                                <div className={'col-12 col-md-6 text-light'}>
                                    <h1 className={'pb-3'}>Анализ пользователей
                                        ВКонтакте</h1>
                                    <h5 className={'font-weight-normal pb-3'}>
                                        <strong>VK
                                            Analysis</strong> предназначен для
                                        того,
                                        чтобы узнать, какие фотографии и
                                        посты друзей "лайкнул" пользователь</h5>
                                    <div className="py-4">
                                        {this.renderButton()}
                                    </div>
                                </div>
                                <div className="col-md-6 p-3 main-page-step">
                                    <img src={users} alt="users"
                                         className={'w-100 main-page-users-img'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'container text-primary pt-4'}>
                        <div className={'row py-5'}>
                            <div className="col">
                                <h2>Как это работает?</h2>
                            </div>
                        </div>
                        <div className="pb-5">
                            <Row>
                                <div className="col-md-6 p-3 main-page-step">
                                    <img className={'w-100'} src={addressLineVk}
                                         alt="address-line"/>
                                </div>
                                <Col md={6}>
                                    <div className={'d-flex fill'}>
                                        <h5 className={'font-weight-normal align-self-center'}>1.
                                            Вводим id пользователя из адресной
                                            строки.</h5>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="py-5">
                            <Row>
                                <Col md={6}>
                                    <div className={'d-flex fill'}>
                                        <h5 className={'font-weight-normal align-self-center'}>2.
                                            Настраиваем количество первых постов
                                            и фотографий, которые будем
                                            проверять.</h5>
                                    </div>
                                </Col>
                                <div className="col-md-6 p-3 main-page-step">
                                    <img className={'w-100'} src={settings}
                                         alt="settings"/>
                                </div>
                            </Row>
                        </div>
                        <div className="py-5">
                            <Row>
                                <div className="col-md-6 p-3 main-page-step">
                                    <img className={'w-100'} src={analysis}
                                         alt="analysing"/>
                                </div>
                                <Col md={6}>
                                    <div className={'d-flex fill'}>
                                        <h5 className={'font-weight-normal align-self-center'}>3.
                                            Производится анализ друзей
                                            введенного пользователя.</h5>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="py-5">
                            <Row>
                                <Col md={6}>
                                    <div className={'d-flex fill'}>
                                        <h5 className={'font-weight-normal align-self-center'}>4.
                                            Profit! Теперь можете посмотреть,
                                            кого "лайкал" пользователь.</h5>
                                    </div>
                                </Col>
                                <div className="col-md-6 p-3 main-page-step">
                                    <img className={'w-100'} src={result}
                                         alt="result"/>
                                </div>
                            </Row>
                        </div>
                    </div>
                </div>
            </>
        );


    }

    renderButton = () => {
        if (LocalStorageUtils.getToken()) {
            return (<Button variant={'light'} onClick={
                this.props.toAnalyse
            } size={'lg'}>
                <span className={'text-primary'}>Анализировать</span>
            </Button>)
        }
        return (
            <OverlayTrigger
                placement={"bottom"}
                overlay={<Tooltip id="tooltip">{"Необходимо авторизироваться."}</Tooltip>}
            >
        <span className="d-inline-block">
          <Button
              style={{pointerEvents: "none"}}
              variant="light"
              type="submit"
              disabled
              size={"lg"}
          >
            <span className={'text-primary'}>Анализировать</span>
          </Button>
        </span>
            </OverlayTrigger>
        )
    }
}

export default MainPageView;