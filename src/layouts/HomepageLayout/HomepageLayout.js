import React from 'react'
import {Header,Footer} from '../../components';

const HomepageLayout = props =>  (
    <div className="fullHight">
        <Header />
            {props.children}
        <Footer />
    </div>
);

export default HomepageLayout;
