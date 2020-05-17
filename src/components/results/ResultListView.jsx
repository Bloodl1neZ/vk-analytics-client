import React, {Component} from 'react';
import AnalyseResult from './AnalyseResult';
import {Accordion, Button, Col, Container, Row} from 'react-bootstrap';
import Header from '../header/Header';
import {compareLikedUsersDesc} from './utils';

class ResultListView extends Component {
    render() {
        const {results, onDelete} = this.props;
      const res = results.map(({id, user, dateTime, likedUsers}) => {
            return <AnalyseResult onDelete={() => onDelete(id)} user={user} date={new Date(dateTime)}
                                  likedUsers={likedUsers.sort(
                                      compareLikedUsersDesc)} id={id} id={id}/>
        });
        return (
            <>
                <Header progress={true}/>
              <Container>
                <div className={'py-4'}>
                  <Row>
                    {this.renderContent(res)}
                  </Row>
                </div>
              </Container>
            </>
        );
    }

    renderContent = (res) => {
      if (!res.length) {
            return (<Col className={'text-center m-0'}>
                <p>Список анализов пуст</p>
                <div className={'py-3'}>
                    <Button variant={"primary"} href={"/analyse"} size={"lg"}>Анализировать</Button>
                </div>
            </Col>)
        }
        return (<Col lg={7} xs={12} className={'m-auto'}>
            <Accordion defaultActiveKey={0}>
                {res}
            </Accordion>
        </Col>);
    };
}

export default ResultListView;