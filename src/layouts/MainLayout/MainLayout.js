import React from 'react'
import {Header,Footer} from '../../components';

const MainLayout = props =>  (
    <div>
        <Header />
        <div className="main">
            {props.children}
        </div>
        <Footer />
    </div>
);

export default MainLayout;
