import React from 'react';
import './form-input.style.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps} />
        {
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
            label ? (<label id="my-label" htmlFor="my-label" className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>) : null
        }
    </div>
);

export default FormInput;