import React, {Component} from 'react';
import AnalyseResult from "./AnalyseResult";
import {Accordion} from "react-bootstrap";

class ResultsView extends Component {
    render() {
        const {results, onDelete} = this.props;
        const res = results.map(({id, user, dateTime, likedUsers}, index) => {
            return <AnalyseResult onDelete={() => onDelete(id)} user={user} date={new Date(dateTime)}
                                  likedUsers={this.sortLikedUsersDesc(likedUsers)} index={index}/>
        });
        return (
            <div className={'lead'}>
                <Accordion defaultActiveKey={0}>
                    {res}
                </Accordion>
            </div>
        );
    }

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