import React from 'react';

export const Input = (props) => {
    const {title, inputerrormessage} = props;
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{title}</label>
            <input {...props} className="form-control" />
            {inputerrormessage && (
                <div className="text-danger">
                    {inputerrormessage}
                </div>
            )}
        </div>
    )
};

export default Input;