// @flow
import React from 'react';
import PageTemplate from 'components/base/PageTemplate';
import BoardSection from 'components/Board/BoardSection';
import BoardList from 'components/containers/BoardList';
import Header from 'components/base/Header';

const Home = () => {
    return (
        <div>
            <PageTemplate header={<Header/>}>
                <BoardSection>
                    <BoardList/>
                </BoardSection>
            </PageTemplate>
        </div>
    );
};

export default Home;