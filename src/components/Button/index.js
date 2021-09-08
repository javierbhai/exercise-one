import React from 'react';
import './ButtonStyles.css';

const Button = ({ click, className, iconClassName }) => <div onClick={click} className={className}><i className={iconClassName}></i></div>

export default Button;