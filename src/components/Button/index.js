import React from 'react';
import './ButtonStyles.css';

const Button = ({ onClick, className, iconClassName }) => <div onClick={onClick} className={className}><i className={iconClassName}></i></div>

export default Button;