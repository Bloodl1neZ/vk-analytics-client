import React, {Component} from 'react';
import Header from "../header/Header";
import {Button, Container, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import LocalStorageUtils from "../../utils/LocalStorageUtils";

class MainPageView extends Component {
    render() {

        return (
            <>
                <Header/>
                <div className={'lead'}>
                    <Container>
                        <Row>
                            <div className={'pt-3'}>
                                <h1>Анализ активности пользователей ВКонтакте</h1>
                                <p><strong>VK Analysis</strong> предназначен для того,
                                    чтобы узнать, кого "лайкает" пользователь больше всего</p>
                                {this.renderButton()}
                            </div>
                        </Row>
                    </Container>
                </div>
            </>
        );


    }

    renderButton = () => {
        if (LocalStorageUtils.getToken()) {
            return (<Button variant={"primary"} onClick={
                this.props.toAnalyse
            }>Анализировать</Button>)
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
          >
            Анализировать
          </Button>
        </span>
            </OverlayTrigger>
        )
    }
}

export default MainPageView;