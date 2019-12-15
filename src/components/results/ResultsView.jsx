import React, {Component} from 'react';
import AnalyseResult from "./AnalyseResult";
import {Accordion, Button, Col, Container, Row} from "react-bootstrap";
import Header from "../header/Header";

class ResultsView extends Component {
    render() {
        const {results, onDelete} = this.props;
        const res = results.map(({id, user, dateTime, likedUsers}, index) => {
            return <AnalyseResult onDelete={() => onDelete(id)} user={user} date={new Date(dateTime)}
                                  likedUsers={this.sortLikedUsersDesc(likedUsers)} index={index}/>
        });
        return (
            <>
                <Header progress={true}/>
                <div className={'lead'}>
                    <Container>
                        <div className={'py-4'}>
                            <Row>
                                {this.renderContent(res)}
                            </Row>
                        </div>
                    </Container>
                </div>
            </>
        );
    }

    renderContent = (res) => {
        if (res.length === 0) {
            return (<Col className={'text-center m-0'}>
                <p>Список анализов пуст</p>
                <div className={'py-3'}>
                    <Button variant={"primary"} onClick={
                        this.props.toAnalyse
                    } size={"lg"}>Анализировать</Button>
                </div>
            </Col>)
        }
        return (<Col lg={7} xs={12} className={'m-auto'}>
            <Accordion defaultActiveKey={0}>
                {res}
            </Accordion>
        </Col>);
    };

    sortLikedUsersDesc = likedUsers => {
        return likedUsers.sort((first, second) => {
            const firstCount = first.likedPhotos.length + first.likedPosts.length;
            const secondCount = second.likedPhotos.length + second.likedPosts.length;
            if (firstCount > secondCount) {
                return -1;
            }
            if (firstCount < secondCount) {
                return 1;
            }
            return 0;
        })
    }
}

export default ResultsView;