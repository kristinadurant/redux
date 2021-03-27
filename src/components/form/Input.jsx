import React from 'react';

const Input = ({ id, label, ...rest}) => {
    return (
        <div>
            <label htmlFor={id}>
                {label}
                {rest.required && <strong title="required" aria-label='required'> *</strong>}   
            </label>
            <input type='text' id={id} name={label} {...rest} />
        </div>
    )
}

export default Input;