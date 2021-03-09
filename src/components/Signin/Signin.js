import React,{ Component} from 'react';
import {Button} from '../../components';

import './style.scss';
import {sigInWithGoogle} from '../../config/utilities';


class Signin extends Component {

    handleSubmit = async e => {
        e.preventDefault();
    }
    render() {
        return (
            <div className="signin">
                <div className="wrap">
                    <h2>Login</h2>
                    <div className="formWrap">
                        <form onSubmit={this.handleSubmit}>
                            <div className="socialSignin">
                                <div className="row">
                                    <Button onClick={sigInWithGoogle}>
                                        Sign in with Google 
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

export default Signin;
