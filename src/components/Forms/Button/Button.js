import React from 'react';
import './style.scss';

const Button = ({children,...otherProps})=> (
    <button className="btn" {...otherProps}>
        {children}
    </button>
);

export default Button;
