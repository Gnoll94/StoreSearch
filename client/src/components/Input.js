import React from 'react';

export const Input = (props) => {
    const {title, errorMessage} = props;
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{title}</label>
            <input {...props} className="form-control" />
            {errorMessage && (
                <div className="text-danger">
                    {errorMessage}
                </div>
            )}
        </div>
    )
};

export default Input;