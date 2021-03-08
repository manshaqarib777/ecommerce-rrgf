import React from 'react';
import {Button} from '../../components';

import './style.scss';


const Signin = () => (
    <div className="signin">
        <div className="wrap">
            <h2>Login</h2>
            <div className="formWrap">
                <form className="">
                    <div className="socialSignin">
                        <div className="row">
                            <Button>
                                Sign in with Google 
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
);

export default Signin;
